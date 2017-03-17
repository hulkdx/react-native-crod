import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
import Header from '../components/HomeScreen/Header.js'
import Footer from '../components/HomeScreen/Footer.js'
import Body from '../components/HomeScreen/Body.js'

class HomeScreen extends Component {



  render() {
    return (
      <ViewContainer>
        <Header />
        <Body />
        <Footer />
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
