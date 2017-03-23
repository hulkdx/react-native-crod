import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';


class ProfileHeader extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.profileText}>Name </Text>
        <View style={styles.profileImage}/>
        <Text style={styles.profileText}> Personal Info </Text>
      </View>


    )
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  profileImage:{
    backgroundColor: 'blue',
    width: 20,
    height: 20,
    alignSelf: 'center'
  },
  profileText:{
    fontSize: 10,
  },
});

module.exports = ProfileHeader
