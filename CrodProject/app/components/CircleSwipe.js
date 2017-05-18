/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Circles of swipes on the bottom of the LoginScreen
*/
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const size = 30;

class CircleSwipe extends Component {

  render() {
    switch (this.props.pageNumber) {
      default:
        break;
      case 1:
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Icon name="circle-thin" size={size} style={styles.circlesBlack} />
            <Icon name="circle-thin" size={size} style={styles.circles} />
            <Icon name="circle-thin" size={size} style={styles.circles} />
          </View>

        );
      case 2:
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Icon name="circle-thin" size={size} style={styles.circles} />
          <Icon name="circle-thin" size={size} style={styles.circlesBlack} />
          <Icon name="circle-thin" size={size} style={styles.circles} />
        </View>
      );
      case 3:
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Icon name="circle-thin" size={size} style={styles.circles} />
          <Icon name="circle-thin" size={size} style={styles.circles} />
          <Icon name="circle-thin" size={size} style={styles.circlesBlack} />
        </View>
      );

    }
  }

}

const styles = StyleSheet.create({
  circles: {
    color: 'white',
    marginLeft: 5,
    marginBottom: 20
  },
  circlesBlack: {
    color: 'black',
    marginLeft: 5,
    marginBottom: 20

  },
});

module.exports = CircleSwipe;
