import React from 'react';
import {View, Text, StyleSheet, StatusBar, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, fonts} from '../../constants';
import {GetIsDarkMode} from '../../redux/system/selector';

export default function Header({title}) {
  const isDarkMode = GetIsDarkMode();
  const backgroundColor = isDarkMode ? colors.black : colors.white;

  return (
    <SafeAreaView
      style={
        Platform.OS === 'ios'
          ? {backgroundColor}
          : {backgroundColor, paddingTop: StatusBar.currentHeight}
      }>
      <StatusBar backgroundColor={backgroundColor} barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      
      </View>
      <View
          style={{
            borderBottomColor:colors.gainsboro,
            borderBottomWidth: 0.5,
            width:205,
            alignSelf:"center"
        }}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 5,
    
  },
  text: {
    fontSize: fonts.f20,
    fontWeight: 'bold',
    color: colors.peachy_pluff,
    marginBottom: 5,
    alignSelf: 'center',
  },
  
});
