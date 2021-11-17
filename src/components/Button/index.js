import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {colors, fonts} from "../../constants"


export default function ButtonLogin({text,onPress}) {


    return (
        <View style={styles.containerLogin}>
            <TouchableOpacity onPress={onPress} style={styles.button} >
                <Text style={styles.text}>
                    {text}
                    
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export  function ButtonLogout({text,onPress}) {


    return (
        <View style={styles.containerLogout}>
             <TouchableOpacity onPress={onPress} style={styles.button} >
                <Text style={styles.text}>
                    {text}                    
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export function Button({text,onPress}) {


    return (
        <View style={styles.containerLogout}>
             <TouchableOpacity onPress={onPress} style={styles.button} >
                <Text style={styles.text}>
                    {text}                    
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  containerLogin: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor:colors.light_blue,
    alignSelf: 'center',
    backgroundColor:colors.light_blue
  },
  containerLogout:{
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor:colors.peachy_pluff,
    borderColor:colors.peachy_pluff,
    alignSelf: 'center',
    
    marginBottom:3,
  },
  button: {
      width:"100%",
      justifyContent:"center"
      
  },
  text: {
      fontSize:fonts.f12,
      height:15,
      letterSpacing:1.2,
      fontWeight:"600",
      color:colors.white
  },
});