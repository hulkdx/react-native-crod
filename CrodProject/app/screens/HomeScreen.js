import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
import Header from '../components/HomeScreen/Header.js'
import FooterBar from '../components/FooterBar.js'
import Body from '../components/HomeScreen/Body.js'

class HomeScreen extends Component {



  render() {
    return (
      <ViewContainer>
        <Header />
        <Body />
        <FooterBar />
      </ViewContainer>

    )
  }

}

const styles = StyleSheet.create({
  body: {
    flex:1,
  }
});

module.exports = HomeScreen
