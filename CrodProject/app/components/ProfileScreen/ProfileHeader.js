import React, { Component } from 'react';
import {StyleSheet,TouchableOpacity,Image,Text,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


const profileImage = require("../../../img/topprofileblu.jpg");

class ProfileHeader extends Component {

  render() {
    return (
      <Image style={styles.container} source={profileImage}>
        <TouchableOpacity style={styles.pencilContainer}>
        <Icon name="pencil" style={styles.pencilIcon} />
        </TouchableOpacity>
        <Text style={[styles.profileText, styles.profileName]}>Michele Paoletti</Text>
        <Text style={styles.profileText}>23 years old</Text>
        <Text style={styles.profileText}>from Milan</Text>
      </Image>


    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:3.5,
    padding: 10,
    width: null, height: null,
    paddingBottom: 20,
    paddingTop: 20,
    justifyContent: 'flex-end'
  },
  profileText:{
    alignSelf: 'center',
    color: 'white',
  },
  profileName:{
    fontSize: 25
  },
  pencilContainer:{
    position: 'absolute',
    left: Dimensions.get('window').width - 20,
    top: 10,
  },
  pencilIcon:{
    color: 'white'
  }
});

module.exports = ProfileHeader
