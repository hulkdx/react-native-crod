/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Body of VotingScreen, contains 3 tabs (Articles, Disscussion, Statistics) 4
  and VotingAnimation
*/
'use strict'
// Android element elevation defined for middle voting image
import React, { Component } from 'react';
import {StyleSheet,Text,View,Dimensions} from 'react-native';
import _ from 'underscore'
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Tabs from 'react-native-tabs';
import Articles from './Articles.js'
import Statistics from './Statistics.js'
import Disscussion from './Disscussion.js'
import VotingAnimation from './VotingAnimation.js'


class Body extends Component {

        state = {
          index: 0,
          routes: [
            { key: '1', title: 'Discussion' },
            { key: '2', title: 'Articles' },
            { key: '3', title: 'Statistics'}
          ],
        };

        _handleChangeTab = (index) => {
        this.setState({ index });
      };

      _renderHeader = (props) => {
        return <TabBar style={styles.tabs} {...props} />;
      };

      _renderSceneVoting = ({ route }) => {
        switch (route.key) {
        case '1':
          return <Disscussion />;
        case '2':
          return <Articles />;
        case '3':
          return <Statistics />;

        default:
          return null;
        }
      };


  render() {
    return (

       <View style={styles.container}>

      {_.isUndefined(this.props.voted) && <VotingAnimation />}

      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderSceneVoting}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
      </View>



    )
  }

  _renderTabContent(){
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
    return (
      <Tabs selected={this.state.page}
          onSelect={el=>this.onSelectedTab(el)}
          style={styles.tabs}>
          <Text name="articles" style={styles.textStyle}
                selectedStyle={styles.tabsSelected}
                selectedIconStyle={styles.tabsIconSelected}>Articles</Text>
          <Text name="disscussion" style={styles.textStyle}
                selectedStyle={styles.tabsSelected}
                selectedIconStyle={styles.tabsIconSelected}>Disscussion</Text>

          {!_.isUndefined(this.props.voted) &&
          <Text name="statistics" style={styles.textStyle}
                selectedStyle={styles.tabsSelected}
                selectedIconStyle={styles.tabsIconSelected}>Statistics</Text>
          }
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
  bodyContainer:{
    flex: 10,
    backgroundColor: 'white',
  },
  tabContainer:{
    height: Dimensions.get('window').height / 14,
    backgroundColor: 'white'
  },
  tabs:{
  //  backgroundColor: 'rgba(26, 105, 178, 0.49)',
  backgroundColor: '#5d95c4',
  },
  textStyle:{
    fontSize: 23,
    color: '#c4c6c9'
  },
  tabsSelected: {
    //color: 'rgba(37, 36, 51, 0.3)',
    color: '#5d95c4'
  },
  tabsIconSelected: {
    borderBottomWidth: 2,
    borderColor: '#5d95c4',
    //backgroundColor: '#E9EBEE'
  }
});

module.exports = Body
