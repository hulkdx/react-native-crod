'use strict'

import React, { Component } from 'react';
import {StyleSheet,Text, Image,View} from 'react-native';

class Disscussion extends Component {

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>
          Disscussion
        </Text>

      </View>

    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});

module.exports = Disscussion
