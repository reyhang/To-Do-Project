import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import TabBarIcon from '../components/TabBarIcon';
import ProfileScreen from '../screens/ProfileScreen';
import I18n from '../i18n';
import {colors} from '../constants';
import {useSelector} from 'react-redux';
import TaskScreen from '../screens/TaskScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const isDarkMode = useSelector(state => state.system.isDarkMode);

  const homeText = I18n.t('homepage');
  const profileText = I18n.t('profile');
  const taskText = I18n.t("task")

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: colors.dark_salmon,
        tabBarInactiveTintColor: isDarkMode ? colors.white : colors.black,
      }}>
      <Tab.Screen
        name={homeText}
        component={HomeScreen}
        options={{
          tabBarIcon: () => <TabBarIcon name="home" />,
          title: homeText,
        }}
      />

      <Tab.Screen
        name={profileText}
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <TabBarIcon name="person" />,
          title: profileText,
        }}
      />
      <Tab.Screen
        name={taskText}
        component={TaskScreen}
        options={{
          tabBarIcon: () => (
            <TabBarIcon
              name="today-sharp"
            />
          ),
          title:taskText,
        }}
      />
    </Tab.Navigator>
  );
}
