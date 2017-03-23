import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView} from 'react-native';
import Tabs from 'react-native-tabs';
import ProposalFeed from '../HomeScreen/ProposalFeed.js'
const backgroundImage = require("../../../img/backgroundblu.jpg")

class ProfileBody extends Component {

  constructor(props){
      super(props);
      this.state = {page:'proposal'};
    }

  render() {
    return (
      <Image style={styles.container} source={backgroundImage}>
        <Tabs selected={this.state.page}
            onSelect={el=>this.setState({page:el.props.name})}
            style={styles.tabs}>
            <Text name="proposal"
                  selectedStyle={styles.tabsSelected}>Your Proposals</Text>
            <Text name="history"
                  selectedStyle={styles.tabsSelected}>History votes </Text>
        </Tabs>
        <ProposalFeed isProfile={true}/>

      </Image>


    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex:8,
    backgroundColor: '#ADDBE5',
    width: null, height: null
  },
  tabs: {
    position:'relative',
  },
  tabsSelected: {
    color: 'blue'
  },
});

module.exports = ProfileBody
