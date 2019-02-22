import React, { Component } from 'react';
import { FooterTab as FooterTabNB, Footer, Text, Button, Icon } from 'native-base';

class FooterTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Footer>
        <FooterTabNB>
          <Button vertical 
            onPress={() => {this.props.navigation.navigate("Home")}}
            >
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button vertical>
            <Icon name="albums" />
            <Text>Flash Card</Text>
          </Button>
          <Button vertical onPress={() => {this.props.navigation.navigate("Settings")}}>
            <Icon name="settings" />
            <Text>Setting</Text>
          </Button>
        </FooterTabNB>
      </Footer>
    );
  }
}

export default FooterTab;
