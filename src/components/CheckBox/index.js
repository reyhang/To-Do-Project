import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../constants';

export default function CheckBox({
  checked,
  checkedColor,
  style,
  onChangeState,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() =>onChangeState && onChangeState(!checked)}
        style={[styles.container, {...style}]}
      >
    {checked &&  <Icon name="check" color={checked ? checkedColor : colors.light_blue} />}
     </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    borderWidth:1.2,
    borderColor:colors.lila,
    borderRadius:7,
    width:25,
    height:25,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"flex-start",
    
  },
  icon:{
    
  }
})