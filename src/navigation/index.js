import {
  NavigationContainer,

} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../constants';
import RootNavigation from './RootNavigation';

export default function () {
  const isDarkMode = useSelector(state => state.system.isDarkMode);
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  const myTheme = {
    dark: true,
    colors: {
     primary:colors.cornflow_blue,
     card:isDarkMode? colors.light_black : colors.light_grey,
     border:isDarkMode ? colors.light_black : colors.light_grey,
     text:isDarkMode ? colors.light_grey : colors.light_black,
    },
  };

  return (
    <NavigationContainer theme={myTheme}>
      <StatusBar barStyle={barStyle} backgroundColor={colors.light_grey} />
      <RootNavigation />
    </NavigationContainer>
  );
}

/*Customlaştırmak istersek bu şekilde yazabiliriz.
 const myTheme = {
    
    dark:true,

        ...DefaultTheme,
        colors:{
            ...DefaultTheme.colors,
            primary:colors.cornflow_blue
        }
    } */
