/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Statistics tab bar
*/
'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const backgroundImage = require('../../../img/backgroundvotingup.jpg');

class Statistics extends Component {

  render() {
    return (
      <View source={backgroundImage} style={styles.container}>
        <Text >
          Statistics
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(237, 244, 252)',
  }
});

module.exports = Statistics;
