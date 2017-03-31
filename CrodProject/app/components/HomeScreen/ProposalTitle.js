import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';

class ProposalTitle extends Component {

  render() {
    return (
      <View style={styles.titleRoot}>
        <Text style={styles.title}>
          {this.props.text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
  },
  titleRoot: {
    padding: 20,
    flex: 5,
    alignItems:'center'
  },
});

module.exports = ProposalTitle
