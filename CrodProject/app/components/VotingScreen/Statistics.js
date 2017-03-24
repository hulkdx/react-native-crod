'use strict'
import React, { Component } from 'react';
import {StyleSheet,Text, Image,View} from 'react-native';

const backgroundImage = require("../../../img/backgroundvotingup.jpg")

class Statistics extends Component {

  render() {
    console.log(this.props);
    return (
      <View source={backgroundImage} style={styles.container}>
        <Text >
          Statistics
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

module.exports = Statistics
