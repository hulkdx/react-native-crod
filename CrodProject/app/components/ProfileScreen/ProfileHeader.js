import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';



class ProfileHeader extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileImage}/>
        <Text style={styles.profileText}> Personal Info </Text>
      </View>


    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  profileImage:{
    backgroundColor: 'blue',
    width: 20,
    height: 20,
    alignSelf: 'center'
  },
  profileText:{
    fontSize: 30,
    marginLeft: 20,
  },
});

module.exports = ProfileHeader
