import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: ''
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: ''
  },
];
export default class SettingScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Setting screen</Text>
    </View>
    );
  }
}