import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';

class ProposalDeadline extends Component {

  render() {
    return (
      <View style={styles.deadlineRoot}>

      <View style={styles.daysLeft}>
        <Text style={{color: 'white', textAlign: 'center',}}> 12 days </Text>
      </View>

      <View style={styles.day}>
        <Text style={{color: '#2575BB', fontSize: 25, textAlign: 'center',}}> {this.props.day} </Text>
      </View>

      <View style={styles.date}>
        <Text style={{color: 'white', textAlign: 'center',}}> {this.props.month} {this.props.date} </Text>
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
    backgroundColor: 'red',
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
    // padding: 15,
    backgroundColor: '#2575BB',
    borderColor: '#2575BB',
    borderBottomWidth: 0.2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  deadlineRoot: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 9,
    backgroundColor: 'white',
    borderColor: '#2575BB',
    borderWidth: 0.2,
    borderRadius: 10,
  },
});

module.exports = ProposalDeadline
