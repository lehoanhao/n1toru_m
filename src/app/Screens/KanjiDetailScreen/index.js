import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle } from 'native-base';

class KanjiDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
      <Header>
        <Left />
        <Body>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Body>
        <Right />
      </Header>
    </Container>
    );
  }
}

export default KanjiDetailScreen;
