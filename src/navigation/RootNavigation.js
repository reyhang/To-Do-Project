import {createStackNavigator} from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from "../navigation/TabNavigation"


export const AppScreen = {
  login: 'Login',
  home: 'Home',
};

const Stack = createStackNavigator();

export default function StackNavigator() {

  const isLogin = useSelector(state => state.system.isLogin)
  
  const initialRoute = isLogin ? AppScreen.home : AppScreen.login;

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      {isLogin ? (
        <Stack.Screen
          name={AppScreen.home}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name={AppScreen.login}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
}
