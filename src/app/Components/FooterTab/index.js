import React, { Component } from 'react';
import { FooterTab as FooterTabNB, Footer, Text, Button, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

const BottomMenu = [
  {
    icon: 'apps',
    name: 'Home',
    title: 'Kanji'
  },
  {
    icon: 'photos',
    name: 'FlashCard',
    title: 'Flash Card'
  },
  {
    icon: 'settings',
    name: 'Settings',
    title: 'Settings'
  }
]

class FooterTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Home"
    };
  }
  handleTabPress = name => {
    this.setState({ activeTab: name })
    this.props.navigation.navigate(name)
  }

  render() {
    let { activeTab } = this.state
    return (
      <Footer
        style={styles.footerTab}
      >
        <FooterTabNB
        >
          {
            BottomMenu.map((menu, idx) => (
              <Button vertical key={idx}
                onPress={() => { this.handleTabPress(menu.name) }}
              >
                <Icon style={activeTab === menu.name ? styles.itemMenuIconActive : styles.itemMenuIcon} name={menu.icon} />
                <Text style={activeTab === menu.name ? styles.itemMenuTextActive : styles.itemMenuText}>{menu.title}</Text>
              </Button>
            ))
          }
        </FooterTabNB>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  footerTab: {
    backgroundColor: '#256F27',
  },
  itemMenuText:{
    color: 'white',
    fontSize: 12,
    fontWeight: "500",
  },
  itemMenuTextActive:{
    color: '#FABD25',
    fontSize: 15,
    fontWeight: "500",
  },
  itemMenuIcon:{
    color: "white",
    fontSize: 23,
  },
  itemMenuIconActive:{
    color: "#FABD25",
    fontSize: 30,
  }

})

export default FooterTab;
