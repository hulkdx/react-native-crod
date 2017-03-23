import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
const backgroundImage = require("../../../img/topprofileblu.jpg")
const profileImage = require("../../../img/brigel.png")

class ProfileHeader extends Component {

  render() {
    return (
      <Image style={styles.container} source={backgroundImage}>
        <View style={styles.nameCityContainer}>
          <Text style={styles.profileText}>Name </Text>
          <View style={{flex:1}}/>
          <Text style={styles.profileText}>City </Text>
        </View>

        <Image style={styles.profileImage} source={profileImage}/>

        <View style={styles.nameCityContainer}>
          <Text style={styles.profileText}>Surname </Text>
          <View style={{flex:1}}/>

          <Text style={styles.profileText}>Age </Text>
        </View>
      </Image>


    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
    padding: 10,
    width: null, height: null,
    paddingBottom: 20,
    paddingTop: 20,
  },
  profileImage:{
    flex:5,
    resizeMode: 'center',
    alignSelf:'center',
    marginTop: 70,
  },
  profileText:{
    fontSize: 13,
    alignSelf: 'center',
    color: 'white',
  },
  nameCityContainer: {
  }
});

module.exports = ProfileHeader
