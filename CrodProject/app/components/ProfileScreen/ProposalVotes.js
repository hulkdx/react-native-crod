import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';

class ProposalVotes extends Component {

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
  votesContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  votesImage:{
    flex:1,
    width: null, height: null,
    resizeMode: 'contain',
    paddingTop: 20,
    paddingBottom: 20,
    marginRight: 5
  },
});

module.exports = ProposalVotes
