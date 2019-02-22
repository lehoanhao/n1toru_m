import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import FooterTab from '../Components/FooterTab/index';
import HomeScreen from '../Screens/HomeScreen/index';
import SettingScreen from '../Screens/SettingScreen/index';

const nonHeader = {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
}, nonHeader);

const SettingsStack = createStackNavigator({
  Settings: SettingScreen,
}, nonHeader);

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    tabBarComponent: props =>
    <FooterTab {...props}/>,
  }
));