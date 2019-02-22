import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
class KanjiCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{alignContent: 'center', padding: 0}}>
        <CardItem>
          <Body>
            <Text style={{alignSelf: 'center', fontSize: 50}}>{this.props.kanji}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default KanjiCard;
