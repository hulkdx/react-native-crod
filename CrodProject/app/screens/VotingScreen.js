import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
import Header from '../components/VotingScreen/Header.js'
import Body from '../components/VotingScreen/Body.js'

class VotingScreen extends Component {

  render() {
    return (
      <ViewContainer>
        <Header title={this.props.title}/>
        <Body voted={this.props.voted} />

      </ViewContainer>

    )
  }

}

const styles = StyleSheet.create({

});

module.exports = VotingScreen
