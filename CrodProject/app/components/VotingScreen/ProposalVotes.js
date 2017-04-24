/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti


*/
'use strict'
import React, { Component } from 'react';
import {StyleSheet,TouchableOpacity,Image,Text,View} from 'react-native';

const voteNoSource = require("../../../img/dislike.png")
const voteYesSource = require("../../../img/like.png")

class ProposalVotes extends Component {

  render() {
    if (this.props.isClickable) {
      return(
      <View style={[styles.votesContainer, this.props.style]} >

        <TouchableOpacity style={styles.votesImageContainer} onPress={this.props.votedClicked.bind(this,true)} >
          <Image style={styles.votesImage} source={voteYesSource}/>
          <Text style={styles.voteYesText}>{this.props.votedYes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.votesImageContainer} onPress={this.props.votedClicked.bind(this,false)} >
          <Image style={styles.votesImage} source={voteNoSource}/>
          <Text style={styles.voteNoText}>{this.props.votedNo}</Text>
        </TouchableOpacity>
      </View>)
    }
    return (
      <View style={styles.votesContainer}>

        <View style={styles.votesImageContainer} >
          <Image style={styles.votesImage} source={voteYesSource}/>
          <Text style={styles.voteYesText}>{this.props.votedYes}</Text>
        </View>
        <View style={styles.votesImageContainer} >
          <Image style={styles.votesImage} source={voteNoSource}/>
          <Text style={styles.voteNoText}>{this.props.votedNo}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  votesContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  votesImageContainer:{
    marginRight: 10,
  },
  votesImage:{
    width: 20, height: 20,
    resizeMode: 'contain',

  },
  voteYesText: {
    alignSelf:'center',
    color: 'green',
  },
  voteNoText: {
    alignSelf:'center',
    color: 'red',
  },
});

module.exports = ProposalVotes
