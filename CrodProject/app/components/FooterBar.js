import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';




class Footer extends Component {
  state = {
    viewsTab: [],
    isTabClosed: false,
  };

  render() {
    return (
      <View>
        <Text>
          FOOTER
        </Text>

      </View>


    )
  }

}

const styles = StyleSheet.create({
});

module.exports = Footer
