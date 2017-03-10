import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity, TextInput, Image} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
import Icon from 'react-native-vector-icons/FontAwesome'


class CircleSwipe extends Component {

  render() {
    return (

      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        <Icon name="circle" style={styles.circles} />
        <Icon name="circle" style={styles.circles} />
        <Icon name="circle" style={styles.circles} />
      </View>

    )
  }

}

const styles = StyleSheet.create({
  circles: {
    color: "white",
    marginLeft: 5
  },
});

module.exports = CircleSwipe
