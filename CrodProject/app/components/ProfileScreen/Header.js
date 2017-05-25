/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Header
*/
'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProfileHeader extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.pencilContainer}>
        <Icon name="pencil" style={styles.pencilIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutContainer} onPress={this._onClickLogout}>
        <Text style={styles.profileText}>Logout</Text>
        </TouchableOpacity>

        <Image style={styles.profileImage} source={{ uri: 'http://i.imgur.com/flVj90L.png' }} />
        <Text style={[styles.profileText, styles.profileName]}>Michele Paoletti</Text>
        <Text style={styles.profileText}>23 years old</Text>
        <Text style={styles.profileText}>from Milan</Text>
      </View>
    );
  }

  _onClickLogout = () => {
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3.5,
    paddingBottom: 5,
    paddingTop: 20,
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(44, 184, 214)'
  },
  profileImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  profileText: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'transparent',
  },
  profileName: {
    fontSize: 25
  },
  pencilContainer: {
    position: 'absolute',
    left: Dimensions.get('window').width - 20,
    top: 10,
    backgroundColor: 'transparent',
  },
  pencilIcon: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  logoutContainer: {
    position: 'absolute',
    left: 10,
    top: 10,
    backgroundColor: 'transparent',
  }
});

module.exports = ProfileHeader;
