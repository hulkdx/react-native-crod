/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  A shared component representing the deadlines
*/
'use strict'
import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

class ProposalDeadline extends Component {

  render() {
    return (
      <View style={styles.deadlineRoot}>

      <View style={styles.daysLeft}>
        <Text style={{color: '#DC143C', textAlign: 'center', fontSize: 16.5}}> 12 days </Text>
      </View>


      <View style={styles.day}>
        <Text style={{color: '#5d95c4', fontSize: 25, textAlign: 'center',}}> {this.props.day} </Text>
      </View>

      <View style={{height: 1, backgroundColor: '#5d95c4'}} />

      <View style={styles.date}>
        <Text style={{color: '#5d95c4', textAlign: 'center',}}> {this.props.month} {this.props.date} </Text>
      </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  daysLeft:{
    flex:1,
    justifyContent: 'center',
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  day:{
    flex:1,
    justifyContent: 'center',
    padding: 5
  },
  date:{
    flex:1,
    justifyContent: 'center',
    borderColor: '#5d95c4',
    borderBottomWidth: 0.7,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  deadlineRoot: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    marginLeft: 9,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

module.exports = ProposalDeadline
