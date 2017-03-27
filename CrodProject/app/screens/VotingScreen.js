import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
import Header from '../components/VotingScreen/Header.js'
import Body from '../components/VotingScreen/Body.js'

class VotingScreen extends Component {

  render() {
    // console.log(this.props);
    return (
      <ViewContainer>
        {/* Get this props id from ProposalFeed.js */}
        <Header proposalId={this.props.proposalId}/>
        <Body voted={this.props.voted} />

      </ViewContainer>

    )
  }

}

const styles = StyleSheet.create({

});

module.exports = VotingScreen
