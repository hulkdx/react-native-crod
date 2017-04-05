import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView,Dimensions} from 'react-native';
import Tabs from 'react-native-tabs';
import ProfileHistory from '../ProfileScreen/ProfileHistory.js'
import ProfileProposal from '../ProfileScreen/ProfileProposal.js'

const backgroundImage = require("../../../img/backgroundblu.jpg")

Dimensions.get('window').height / 14;

class ProfileBody extends Component {

  constructor(props){
      super(props);
      this.state = {page:'proposal'};
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          {this._renderTabs()}
        </View>
        {/* Articles / Comments / Statistics body Section */}
        <View style={styles.bodyContainer}>
          {this._renderTabContent()}
        </View>

      </View>


    )
  }

  _renderTabContent(){
    switch (this.state.page) {
      case 'proposal':
        return(
          <ProfileProposal  />
        )
      case 'history':
      return(
        <ProfileHistory />
      );
    }
  }

  onSelectedTab(el){
    this.setState({page:el.props.name})
  }

  _renderTabs(){
    return (
      <Tabs selected={this.state.page}
          onSelect={el=>this.onSelectedTab(el)}>
          <Text name="proposal" style={styles.textStyle}
                selectedIconStyle={styles.tabsSelectedOne}>Your Proposal</Text>
          <Text name="history" style={styles.textStyle}
                selectedIconStyle={styles.tabsSelectedTwo}>History of votes</Text>
      </Tabs>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:8,
  },
  textStyle:{
    fontSize: 18.5
  },
  tabContainer:{
    height: Dimensions.get('window').height / 14,
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

});

module.exports = ProfileBody
