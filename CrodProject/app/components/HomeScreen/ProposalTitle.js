import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProposalTitle extends Component {

  render() {
    return (
      <View style={styles.titleRoot}>

        <Text style={styles.title}>
          {this.props.text}
        </Text>

        <View style={styles.emoji}>
        <Text> <Icon name='hand-o-up' size={22} color="#7FE57F"/> </Text>
        <Text> <Icon name='hand-o-down' size={22} color="#ff7f7f"/> </Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleRoot: {
    flex: 3,
    marginTop: -15,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: '#2575BB',
    borderWidth: 0.2,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'sans-serif',
  },
  emoji: {
    flexDirection: 'row',

  },
});

module.exports = ProposalTitle
