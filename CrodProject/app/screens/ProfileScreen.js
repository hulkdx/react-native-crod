import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
import ProfileHeader from '../components/ProfileScreen/ProfileHeader.js'
import FooterBar from '../components/FooterBar.js'
import ProfileBody from '../components/ProfileScreen/ProfileBody.js'
import CreateProposal from '../components/HomeScreen/Header.js'

class ProfileScreen extends Component {



  render() {
    return (
      <ViewContainer>
        <ProfileHeader />
        <ProfileBody />
        <FooterBar profileScreen={true}/>
      </ViewContainer>

    )
  }

}

const styles = StyleSheet.create({

});

module.exports = ProfileScreen
