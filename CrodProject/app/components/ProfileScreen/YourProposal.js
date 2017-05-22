/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Proposal tab
*/
'use strict';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, ListView } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import ProposalTitle from '../HomeScreen/ProposalFeed/ProposalTitle.js';
import userProposal from '../../data-manager/userProposal';

// TODO: change this from category data-manager
const categorySource = require('../../../img/categories/science.png');

class ProfileProposal extends Component {


  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(userProposal),
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(proposal) => { return this._renderProposalRow(proposal); }}
      />
      </View>
    );
  }

  /*
    Rendering Each row of ListView
    TODO: get the user info and show history for only that user.
    @param proposal: the proposal elements from /data-manager/proposal.js
  */
  _renderProposalRow(proposal) {
    console.log(proposal);
    return (
      <View style={styles.rowContainer}>
      <TouchableOpacity style={styles.rowProposalRoot} onPress={this.proposalClicked.bind(this, proposal)}>
        <ProposalTitle text={proposal.title} category={categorySource} />
      </TouchableOpacity>
      </View>
    );
  }

  /*
    When the row of proposal clicked
    @param proposal: the proposal elements from /data-manager/proposal.js
    TODO: change the proposal object with proposal id
  */
  proposalClicked = (proposal) => {
    Actions.voting({ type: ActionConst.REFRESH, proposalId: proposal.id });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: '#E9EBEE',
    // borderWidth: 2,
    paddingTop: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
    margin: 5,

  },
  rowProposalRoot: {
    flex: 3,
    flexDirection: 'row',
  },
});


module.exports = ProfileProposal;
