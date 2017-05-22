/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  HomeScreen, This screen will show first after the user login
*/
'use strict';
import React, { Component } from 'react';

import ViewContainer from '../components/ViewContainer.js';
import Header from '../components/HomeScreen/Header.js';
import Body from '../components/HomeScreen/Body.js';

class HomeScreen extends Component {
  render() {
    return (
      <ViewContainer>
        <Header createProposal={this.props.createProposal} />
        <Body createProposal={this.props.createProposal} />
      </ViewContainer>
    );
  }

}

module.exports = HomeScreen;
