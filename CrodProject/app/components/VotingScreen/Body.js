'use strict'
// Android element elevation defined for middle voting image
import React, { Component } from 'react';
import {StyleSheet,Text, Image,View,Animated,PanResponder,Dimensions} from 'react-native';
import Tabs from 'react-native-tabs';
import Articles from './Articles.js'
import Statistics from './Statistics.js'
import Disscussion from './Disscussion.js'
import VotingAnimation from './VotingAnimation.js'

class Body extends Component {

  constructor(props){
      super(props);
      this.state = {
        page      : 'articles',
      };

  }

  render() {
    return (
      <View style={styles.container}>
      {/* Voting Section */}
      <VotingAnimation />
      {/* Articles / Disscussion Tab Section */}
      <View style={styles.tabContainer}>
      <Tabs selected={this.state.page}
          onSelect={el=>this.onSelectedTab(el)}
          style={styles.tabs}>
          <Text name="articles" style={styles.textStyle}
                selectedIconStyle={styles.tabsSelectedOne}>Articles</Text>
          <Text name="disscussion" style={styles.textStyle}
                selectedIconStyle={styles.tabsSelectedTwo}>Disscussion</Text>
          {/* TODO: Add statistics when voted */}
      </Tabs>
      </View>
      {/* Articles / Comments / Statistics body Section */}
      <View style={styles.bodyContainer}>
        {this._renderExtraParts()}
      </View>

      </View>

    )
  }

  _renderExtraParts(){
    switch (this.state.page) {
      case 'articles':
        return(
          <Articles />
        )
      case 'disscussion':
      return(
        <Disscussion />
      )
      case 'statistics':
      return(
        <Statistics />
      )
      default:

    }
  }

  onSelectedTab(el){
    this.setState({page:el.props.name})
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 5,
    width: null, height: null,
  },
  tabContainer:{
    flex: 2,
    backgroundColor: 'white'
  },
  bodyContainer:{
    flex: 10,
    backgroundColor: 'white',
  },
  tabsSelectedOne: {
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#1fbff1'
  },
  tabsSelectedTwo: {
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#1fbff1'
  },
  textStyle:{
    fontSize: 18.5
  },
});

module.exports = Body
