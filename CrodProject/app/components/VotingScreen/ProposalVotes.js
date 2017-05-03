/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti


*/
'use strict'
import React, { Component } from 'react';
import {StyleSheet,TouchableOpacity,Image,Text,View} from 'react-native';

const upVoteIcon = require("../../../img/up-vote-icon.png")
const downVoteIcon = require("../../../img/down-vote-icon.png")

class ProposalVotes extends Component {

  render() {
    if (this.props.isClickable) {
      return(
      <View style={[styles.votesContainer, this.props.style]} >

        <View style={styles.votesImageContainer} onPress={this.props.votedClicked.bind(this,true)} >
        <Text style={styles.voteYesText}>{this.props.votedYes}</Text>
          <Image style={styles.votesImageYes} source={upVoteIcon}/>

        </View>
        <View style={styles.votesImageContainer} onPress={this.props.votedClicked.bind(this,false)} >
          <Image style={styles.votesImageNo} source={downVoteIcon}/>
          <Text style={styles.voteNoText}>{this.props.votedNo}</Text>
        </View>
      </View>)
    }
    return (
      <View style={styles.votesContainer}>

        <View style={styles.votesImageContainer} >
          <Image style={styles.votesImageYes} source={upVoteIcon}/>
          <Text style={styles.voteYesText}>{this.props.votedYes}</Text>
        </View>
        <View style={styles.votesImageContainer} >
          <Image style={styles.votesImageNo} source={downVoteIcon}/>
          <Text style={styles.voteNoText}>{this.props.votedNo}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  votesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  votesImageContainer:{
    flexDirection: 'row',
  },
  votesImageYes:{
    width: 22, height: 22,
    resizeMode: 'contain',
    tintColor: '#228b22',
    marginLeft: 2.5

  },
  votesImageNo:{
    width: 22, height: 22,
    resizeMode: 'contain',
    tintColor: '#DC143C',
    marginRight: 2.5

  },
  voteYesText: {
    alignSelf:'center',
    color: '#228b22',
  },
  voteNoText: {
    alignSelf:'center',
    color: '#DC143C',
  },
});

module.exports = ProposalVotes
