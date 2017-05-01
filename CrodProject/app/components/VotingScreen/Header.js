/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Header of Voting Screen
*/
'use strict'
import React, { Component } from 'react';
import {StyleSheet,Text,Image,Dimensions,View, TouchableOpacity} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux'
const profilePhoto = require("../../../img/categories/social.png")
import proposals from '../../data-manager/proposals'
const skipIcon = require("../../../img/skip-icon.png")

class Header extends Component {

  render() {

    return (
            <View style={styles.header}>
            <TouchableOpacity style={styles.profileContainer} onPress={()=> {Actions.profile({type: ActionConst.REFRESH}) }}>
            <Image source={profilePhoto} style={styles.profilePhoto}/>
            <Text style={styles.categoryTxt}> Social </Text>
            </TouchableOpacity>
            <Text style={styles.daysLeftTxt}> 12 days left </Text>

            <TouchableOpacity style={styles.skipIconContainer}>
            <Image style={styles.skipIcon}source={skipIcon}  />
            </TouchableOpacity>
            </View>
    )
  }

}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 0.7,
    borderBottomColor: "#1070b6",
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  profileContainer: {
    flex: 1,
    marginLeft: -10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profilePhoto: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    tintColor: '#1070b6'
  },
  categoryTxt: {
    color: '#1070b6',
    fontSize: 16
  },
  daysLeftTxt: {
    flex: 2,
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
  skipIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  skipIcon: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginRight: 15
  },

});

module.exports = Header
