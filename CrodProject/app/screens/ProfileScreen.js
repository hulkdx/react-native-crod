/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  ProfileScreen to show profile information
*/
'use strict'
import React, { Component } from 'react';
//import {StyleSheet} from 'react-native';

import ViewContainer from '../components/ViewContainer.js'
import Header from '../components/ProfileScreen/Header.js'
import Body from '../components/ProfileScreen/Body.js'

class ProfileScreen extends Component {

  render() {
    return (
      <ViewContainer>
        <Header />
        <Body />
      </ViewContainer>

    )
  }

}

// const styles = StyleSheet.create({
//
// });

module.exports = ProfileScreen
