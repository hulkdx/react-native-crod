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
      <View style={styles.container}>

      <View style={styles.daysLeftContainer}>
        <Text style={styles.daysLeft}>2 days</Text>
      </View>


      <View style={styles.dayContainer}>
        <Text style={styles.day}> Sun </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.dateContainer}>
        <Text style={styles.date}> Apr 16 </Text>
      </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    marginLeft: 9,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  daysLeftContainer:{
    flex:1,
    justifyContent: 'center',
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  daysLeft: {
    color: '#DC143C',
    textAlign: 'center',
    fontSize: 16.5
  },
  dayContainer: {
    flex:1,
    justifyContent: 'center',
    padding: 5
  },
  day: {
    color: '#5d95c4',
    fontSize: 25,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#5d95c4'
  },
  dateContainer: {
    flex:1,
    justifyContent: 'center',
    borderColor: '#5d95c4',
    borderBottomWidth: 0.7,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  date: {
    color: '#5d95c4',
    textAlign: 'center',
  }
});

module.exports = ProposalDeadline
