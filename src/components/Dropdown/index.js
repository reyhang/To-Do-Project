import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {colors, fonts} from '../../constants';

export default function Dropdown({
  items,
  title,
  value,
  style = {},
  onValueChange,
  placeholder = '',
  onDonePress = () => {},
}) {
  const doneText = 'Done';

  return (
    <View style={styles.dropdown} >

      <RNPickerSelect
      onDonePress={()=> onDonePress()}
        onValueChange={val =>onValueChange(val)}
        items={items}
        doneText={doneText}
        placeholder={{label: placeholder}}
        style={styles.picker}
        value={value}
    />
    </View>
  );
}

const styles = StyleSheet.create({
    dropdown:{
        height:Platform.OS === "ios" ? 42 : 42, 
        borderWidth:1,
        borderColor:colors.dark_sea_green,
        borderRadius:5,
        margin:10,
        width:250,
        height:45
    

    },
    title:{
        color:colors.dim_grey,
        padding:5
    },
    picker:{
        inputIOS: {
            fontSize: fonts.f13,
            height: '10%',
            fontWeight: 'bold',
            color: colors.dark_salmon,
            
          },
          inputAndroid: {
            fontSize: fonts.f13,
            height: '100%',
            fontWeight: 'bold',
            color: colors.dark_salmon,
            top: 0,
          },
    },
    icon:{

    },
})
