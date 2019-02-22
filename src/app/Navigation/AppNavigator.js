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
import FlashCardScreen from '../Screens/FlashCardScreen/index';
import KanjiDetailScreen from '../Screens/KanjiDetailScreen/index';

const nonHeader = {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  KanjiDetail: KanjiDetailScreen
}, nonHeader);

const SettingsStack = createStackNavigator({
  Settings: SettingScreen,
}, nonHeader);

const FlashCardStack = createStackNavigator({
  FlashCard: FlashCardScreen,
}, nonHeader);

export default createAppContainer(createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
    FlashCard: FlashCardStack
  },
  {
    tabBarComponent: props =>
    <FooterTab {...props}/>,
  }
));