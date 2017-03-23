import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
import Header from '../components/HomeScreen/Header.js'
import FooterBar from '../components/FooterBar.js'
import Body from '../components/HomeScreen/Body.js'

class CategoryScreen extends Component {

  render() {
    return (
      <ViewContainer>
      <Text>
      {this.props.id}
      </Text>
        <Header />
        <Body />
        <FooterBar homeScreen={true}/>
      </ViewContainer>

    )
  }

}

const styles = StyleSheet.create({

});

module.exports = CategoryScreen
