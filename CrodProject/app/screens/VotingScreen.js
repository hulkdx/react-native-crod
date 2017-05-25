/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Voting Screen, it shows detail of each proposal
*/
'use strict';
import React, { Component } from 'react';
import ViewContainer from '../components/ViewContainer.js';
import HeaderProposal from '../components/VotingScreen/HeaderProposal.js';
import Body from '../components/VotingScreen/Body.js';

class VotingScreen extends Component {

  render() {
    return (
      <ViewContainer>
        {/* Get this props id from ProposalFeed.js */}
        <HeaderProposal proposalId={this.props.proposalId} />
        <Body voted={this.props.voted} proposalId={this.props.proposalId} />
      </ViewContainer>
    );
  }
}

module.exports = VotingScreen;
