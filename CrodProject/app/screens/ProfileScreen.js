import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
import ProfileHeader from '../components/ProfileScreen/ProfileHeader.js'

import ProfileBody from '../components/ProfileScreen/ProfileBody.js'
import CreateProposal from '../components/HomeScreen/Header.js'

class ProfileScreen extends Component {



  render() {
    return (
      <ViewContainer>
        <ProfileHeader />
        <ProfileBody />
      </ViewContainer>

    )
  }

}

const styles = StyleSheet.create({

});

module.exports = ProfileScreen
