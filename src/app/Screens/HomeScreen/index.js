import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity, Alert } from 'react-native'
import { ScrollView, StyleSheet, Image, Dimensions, Platform } from 'react-native';
import { Container, List, Content, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Spinner } from 'native-base';
import KanjiCard from '../../Components/KanjiCard';
import { nextPage, getDataListKanji, prePage } from '../../Actions/kanjiAction';
import { getPreNextPage } from '../../Utils/PageNumber';

var { height, width } = Dimensions.get('window');
const MAX_PAGE = 11
class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let { currentPageNumber } = this.props
    this.props.getData(currentPageNumber)
  }
  handleSwipeLeft = () => {
    let { currentPageNumber } = this.props
    let page = getPreNextPage(currentPageNumber)
    this.props.nextPage(page.nextPage)
    //this.view.zoomInUp(800)
  }
  handleSwipeRight = () => {
    let { currentPageNumber } = this.props
    let page = getPreNextPage(currentPageNumber)
    this.props.prePage(page.prePage)
    //this.view.zoomInUp(800)
  }
  handleKanjiCardPress(){
    console.log("press oke")
  }

  handleViewRef = ref => this.view = ref

  render() {
    let { currentPageData, nextPageData, currentPageNumber, isLoadingData, flagSwider } = this.props
    return (
      <Container style={styles.container}>
        <View >
          <DeckSwiper
            dataSource={[0]}
            onSwipeLeft={this.handleSwipeLeft}
            onSwipeRight={this.handleSwipeRight}
            renderItem={() =>
              <View style={styles.bodySwiper}>
                <ScrollView style={styles.scrollView}>
                  <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                    {
                      !isLoadingData && currentPageData != null ? currentPageData.map(function (val, index) {
                        return (
                          <Animatable.View ref={this.handleViewRef} key={index} style={{ width: '25%', height: 'auto', padding: 2 }}>
                            <TouchableOpacity onPress={() => {
                              
                              Alert.alert(val.value.kanji, val.value.mean)
                              // this.props.navigation.navigate("KanjiDetail")
                            }}>
                              <KanjiCard kanji={val.value.kanji} />
                            </TouchableOpacity>
                          </Animatable.View>

                        );
                      }) : (
                          <Content style={styles.loading}>
                            <Spinner />
                          </Content>
                        )
                    }
                  </View>
                </ScrollView>
                <Text style={{ alignSelf: 'center', paddingTop: 20 }}>Page {currentPageNumber != null ? currentPageNumber : " loading..."}</Text>
              </View>
            }
          />
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  bodySwiper: {
    backgroundColor: 'white'
  },
  container: {
    paddingTop: (Platform.OS === 'ios') ? 30 : 0,
  },
  scrollView: {
    height: (Platform.OS === 'ios') ? height - (140 + 30) : height - 140,
    width: '100%',
    padding: 10,
  },
  loading: {
    paddingTop: height / 2 - 100
  }
})

function mapStateToProps(state) {
  return {
    currentPageData: state.kanji.dataCurrent,
    nextPageData: state.kanji.dataNextPage,
    currentPageNumber: state.kanji.currentPageNumber,
    isLoadingData: state.kanji.isLoadingData,
    flagSwider: state.kanji.flagSwider
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ nextPage: nextPage, prePage: prePage, getData: getDataListKanji }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeScreen);