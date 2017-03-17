import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';

class Body extends Component {
  state = {
    viewsTab: [],
    isTabClosed: false,
  };

  render() {
    return (
      <View style={{flex:1}}>
        <Text >
          FOOTER
        </Text>

      </View>


    )
  }

}

const styles = StyleSheet.create({
});

module.exports = Body
