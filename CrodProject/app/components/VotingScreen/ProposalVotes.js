/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti


*/
'use strict'
import React, { Component } from 'react';
import {StyleSheet,TouchableOpacity,Image,Text,View} from 'react-native';

const upVoteIcon = require("../../../img/upvote-icon.png")
const downVoteIcon = require("../../../img/downvote-icon.png")

class ProposalVotes extends Component {

  render() {
    if (this.props.isClickable) {
      return(
      <View style={[styles.votesContainer, this.props.style]} >

        <TouchableOpacity style={styles.votesImageContainer} onPress={this.props.votedClicked.bind(this,true)} >
          <Image style={styles.votesImageYes} source={upVoteIcon}/>
          <Text style={styles.voteYesText}>{this.props.votedYes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.votesImageContainer} onPress={this.props.votedClicked.bind(this,false)} >
          <Image style={styles.votesImageNo} source={downVoteIcon}/>
          <Text style={styles.voteNoText}>{this.props.votedNo}</Text>
        </TouchableOpacity>
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
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  votesImageContainer:{
    flexDirection: 'row',
    marginRight: 10,
  },
  votesImageYes:{
    width: 20, height: 20,
    resizeMode: 'contain',
    tintColor: '#228b22'

  },
  votesImageNo:{
    width: 20, height: 20,
    resizeMode: 'contain',
    tintColor: '#DC143C'

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
