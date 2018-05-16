import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import LoginScreen from '../screens/LoginScreen';
import AppTabNavigator from './AppTabNavigator';


export default StackNavigator(
  {
    login: {
      screen: LoginScreen,
    },
    main : {
      screen: AppTabNavigator
    }
      },{
        index: 0,
        initialRouteName: 'login',
        headerMode: 'none',
        navigationOptions: {
        gesturesEnabled: false
    }}
);
