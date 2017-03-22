import React, { Component } from 'react';
import {ScrollView, StyleSheet,TouchableOpacity,Image,Text,View} from 'react-native';

class CategoryMenu extends Component {


  render() {
    return (
      <ScrollView scrollsToTop={false}>

        <Text>
          About
        </Text>

        <Text>
          Contacts
        </Text>
      </ScrollView>
    );
  }
};


const styles = StyleSheet.create({
  rowProposalRoot:{
    flexDirection: 'row',
  }
});


module.exports = CategoryMenu
