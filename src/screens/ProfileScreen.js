import React from 'react';
import {View, Text, StyleSheet, Platform, Image} from 'react-native';
import {ScrollView, Switch} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonLogout} from '../components/Button';
import CustomView from '../components/CustomView';
import Header from '../components/Header';
import {colors, fonts} from '../constants';
import {setLanguage, setTheme, userLogout} from '../redux/system/actions';
import {GetIsDarkMode, GetUserInfo} from '../redux/system/selector';
import I18n, {changeLanguage} from '../i18n/index';
import Dropdown from '../components/Dropdown';

export default function ProfileScreen() {
  const isDarkMode = GetIsDarkMode();
  const userInfo = GetUserInfo();
  const logoutText = I18n.t('logout');

  const dispatch = useDispatch();

  const language = useSelector(state => state.system.language);

  const toggleTheme = val => {
    dispatch(setTheme(val));
  };

  const handleLanguageChange = lang => {
    if (lang) {
      dispatch(setLanguage(lang));
      changeLanguage(lang);
    }
  };

  return (
    <CustomView style={styles.container}>
      <Header title="My Profile" />
      <Text style={styles.text}>Dark Mode</Text>
      <Switch
        thumbColor={colors.dark_salmon}
        onValueChange={val => toggleTheme(val)}
        value={isDarkMode}
        style={{alignSelf: 'flex-end', marginRight: 25}}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.infoBox}>
          <Image
            source={{uri: userInfo.profileImg}}
            style={{width: 85, height: 85, borderRadius: 100, marginBottom: 5}}
            resizeMethod="scale"
            resizeMode="contain"
          />
          <Dropdown
            items={[
              {label: 'Türkçe', value: 'tr'},
              {label: 'English', value: 'en'},
            ]}
            value={'en'}
            placeholder="Select please."
            onValueChange={val => handleLanguageChange(val)}
          />
        </View>

        <View style={styles.cell}>
          <Text style={styles.info}>Title </Text>
          <Text style={styles.info}>{userInfo.title} </Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.info}>Name </Text>
          <Text style={styles.info}>{userInfo.name}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.info}>Surname </Text>
          <Text style={styles.info}>{userInfo.surname}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.info}>Display Name </Text>
          <Text style={styles.info}>{userInfo.displayName}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.info}>Mobile Number </Text>
          <Text style={styles.info}>{userInfo.mobile}</Text>
        </View>

      </ScrollView>
      <View style={styles.buttonContainer}>
        <ButtonLogout
          onPress={() => dispatch(userLogout())}
          text={logoutText}
        />
      </View>
    </CustomView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  cell: {
    flex: 1,
  },

  text: {
    fontSize: fonts.f13,
    letterSpacing: 2,
    color: colors.dim_grey,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 15,
  },

  scrollView: {
    paddingBottom: 20,
    marginTop: Platform.OS == 'android' ? 15 : 0,
  },
  info: {
    fontSize: fonts.f13,
    color: colors.dim_grey,
  },
  infoBox: {
    marginTop: 2,
    marginHorizontal: 30,
    padding: 2,
  },
  infoContainer: {
    marginTop: 5,
    paddingBottom: 10,
    borderWidth: 0.5,
    borderColor: colors.dim_grey,
  },
});
