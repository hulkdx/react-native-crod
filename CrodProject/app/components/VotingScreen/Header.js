import React, { Component } from 'react';
import {StyleSheet,Text,Image,Dimensions,View, TouchableOpacity} from 'react-native';
import proposals from '../../data-manager/proposals'
import {Actions, ActionConst} from 'react-native-router-flux'
const profilePhoto = require("../../../img/notification/man1.png")

const skipIcon = require("../../../img/skip-icon.png")

class Header extends Component {

  render() {

    return (
            <View style={styles.header}>
            <TouchableOpacity style={styles.profileContainer} onPress={()=> {Actions.profile({type: ActionConst.REFRESH}) }}>
            <Image source={profilePhoto} style={styles.profilePhoto}/>
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
    borderBottomWidth: 1,
    borderBottomColor: "#88B3D9",
    alignItems: 'center',
    justifyContent: 'center',
    height: 60
  },
  profileContainer: {
    flex: 1,
    marginLeft: 15,
    borderWidth: 1
  },
  profilePhoto: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  daysLeftTxt: {
    flex: 1,
    color: 'red',
    fontSize: 18,
    textAlign: 'center'
  },
  skipIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    borderWidth: 1,
  },
  skipIcon: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    marginRight: 15
  },

});

module.exports = Header
