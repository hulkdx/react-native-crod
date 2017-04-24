/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Header of Voting Screen
*/
'use strict'
import React, { Component } from 'react';
import {StyleSheet,Text,Image,View} from 'react-native';

import proposals from '../../data-manager/proposals'
const skipIcon = require("../../../img/skip-icon.png")

class Header extends Component {

  render() {

    return (
      <View style={styles.header}>
        <Text style={styles.daysLeftTxt}> 12 days left </Text>

        <View style={styles.skipIconContainer}>
          <Image style={styles.skipIcon}source={skipIcon}  />
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: "#88B3D9",
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  daysLeftTxt: {
    flex: 1,
  },
  skipIconContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  skipIcon: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
    paddingRight: 20
  },

});

module.exports = Header
