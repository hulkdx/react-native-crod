'use strict'
// Android element elevation defined for middle voting image
import React, { Component } from 'react';
import {StyleSheet,Text, Image,View,Animated,PanResponder,Dimensions} from 'react-native';
import Tabs from 'react-native-tabs';
import Articles from './Articles.js'
import Statistics from './Statistics.js'
import Disscussion from './Disscussion.js'
import VotingAnimation from './VotingAnimation.js'
import _ from 'underscore'


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
        {this._renderTabs()}
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

  _renderTabs(){
    // without statistics
    if (_.isUndefined(this.props.voted)) return (
      <Tabs selected={this.state.page}
          onSelect={el=>this.onSelectedTab(el)}
          style={styles.tabs}>
          <Text name="articles" style={styles.textStyle}
                selectedIconStyle={styles.tabsSelectedOne}>Articles</Text>
          <Text name="disscussion" style={styles.textStyle}
                selectedIconStyle={styles.tabsSelectedTwo}>Disscussion</Text>
      </Tabs>
    )

    // with statistics
    return(
      <Tabs selected={this.state.page}
          onSelect={el=>this.onSelectedTab(el)}
          style={styles.tabs}>
          <Text name="articles" style={styles.textStyle}
                selectedIconStyle={styles.tabsSelectedOne}>Articles</Text>
          <Text name="disscussion" style={styles.textStyle}
                selectedIconStyle={styles.tabsSelectedMiddle}>Disscussion</Text>
          <Text name="statistics" style={styles.textStyle}
                selectedIconStyle={styles.tabsSelectedTwo}>Statistics</Text>
      </Tabs>
    )
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
  tabsSelectedMiddle: {
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#1fbff1'
  },
  textStyle:{
    fontSize: 18.5
  },
});

module.exports = Body
