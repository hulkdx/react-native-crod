import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity, TextInput, Image} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
import Icon from 'react-native-vector-icons/FontAwesome'

const size = 30;

class CircleSwipe extends Component {

  render() {
    switch (this.props.pageNumber) {
      case 1:
        return(
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name="circle-thin" size={size} style={styles.circlesBlack} />
            <Icon name="circle-thin" size={size}  style={styles.circles} />
            <Icon name="circle-thin" size={size}  style={styles.circles} />
          </View>

        );
      case 2:
      return(
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon name="circle-thin" size={size} style={styles.circles} />
          <Icon name="circle-thin" size={size}  style={styles.circlesBlack} />
          <Icon name="circle-thin" size={size}  style={styles.circles} />
        </View>
      );
      case 3:
      return(
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon name="circle-thin" size={size} style={styles.circles} />
          <Icon name="circle-thin" size={size}  style={styles.circles} />
          <Icon name="circle-thin" size={size}  style={styles.circlesBlack} />
        </View>
      );

    }
  }

}

const styles = StyleSheet.create({
  circles: {
    color: "white",
    marginLeft: 5,
    marginBottom: 20
  },
  circlesBlack: {
    color: "black",
    marginLeft: 5,
    marginBottom: 20

  },
});

module.exports = CircleSwipe
