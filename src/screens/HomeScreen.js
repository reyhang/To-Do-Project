import React, { useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colors, fonts} from '../constants';
import CustomView from '../components/CustomView';
import I18n, { changeLanguage } from '../i18n/index';
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import Input from '../components/Input';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../redux/system/actions';
import { Button } from '../components/Button';

export default function HomeScreen({navigation}) {
 
  const [pageData, setPageData] = useState({
    description:"",
    projectId:null,
    time:"",
  })
  
  const welcomeText = I18n.t('welcome');

  const dispatch = useDispatch()

  const handleLanguageChange = val => {
    if (val) {
      dispatch(setLanguage(val));
      changeLanguage(val);
    }
  };

  const onChangeText = (key,text) => {
    setPageData(page => ({
      ...page,[key]:text
    }))
  }

  const saveProjectTimeLine = () => {

  }

  const onDonePress = () => {};

  return (
    <CustomView style={styles.container}>
      <Header title="Home" />
      <View>
        <Text style={styles.text}> {welcomeText} </Text>
        <View style={styles.dropDownStyle} >
          <Dropdown
            placeholder="Select a project please."
            items={[
              {label: 'Coffy', value: '1'},
              {label: 'Plugger', value: '2'},
              {label: 'Tasks', value: '3'},
            ]}
            onValueChange={val => handleLanguageChange(val)}
            onDonePress={() => onDonePress}
          />
          <Dropdown
            placeholder="Select a duration please."
            items={[
              {label: '1 Hour ', value: '1'},
              {label: '2 Hour ', value: '2'},
              {label: '3 Hour ', value: '3'},
              {label: '4 Hour ', value: '4'},
              {label: '5 Hour ', value: '5'},
              {label: '6 Hour ', value: '6'},
              {label: '7 Hour ', value: '1'},
              {label: '8 Hour ', value: '2'},
              {label: '9 Hour ', value: '3'},
              {label: '10 Hour', value: '4'},
              {label: '11 Hour', value: '5'},
              {label: '12 Hour', value: '6'},
            ]}
            onValueChange={val => handleLanguageChange(val)}
            onDonePress={() => onDonePress}
          />
        </View>
        <View >
          <Input 
          onChangeText={val => onChangeText("description",val)}
          placeHolder="Add a description for project." 
          value={pageData.description}
          multiline
          />
          <View style={styles.buttonContainer}>
            <Button  
            onPress={() => dispatch(saveProjectTimeLine())}
            text="Save"/>
          </View>
        </View>
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: fonts.f20,
    letterSpacing: 2,
    color: colors.dark_salmon,
    alignSelf: 'center',
    margin: 15,
  },
  container: {
    flex: 1,
  },
  dropDownStyle: {

    alignSelf: 'center',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginRight: 15,
    marginTop:5
  },

});
