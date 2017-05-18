/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Header
*/
'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

const proposalIcon = require('../../../img/proposal-icon.png');
const searchIcon = require('../../../img/search-icon1.png');
const profilePhoto = require('../../../img/notification/man1.png');
const closeIcon = require('../../../img/close-icon.png');

class Header extends Component {

  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.profile} onPress={() => { Actions.profile({ type: ActionConst.REFRESH }); }}>
          <Image source={profilePhoto} style={styles.profilePhoto} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.search}>

        <View style={styles.searchBtnContainer}>
          <Image style={styles.searchBtn} source={searchIcon} />
        </View>

         <TextInput
              editable={!this.props.createProposal}
              placeholder="search"
              placeholderTextColor="#5d95c4"
              underlineColorAndroid='transparent'
              style={styles.searchText}
         />
        </TouchableOpacity>
        {/* Create Proposal Button */}
         <TouchableOpacity onPress={!this.props.createProposal ? this.onClickCreateProposal : this.onCloseTab} style={styles.proposal}>
          { !this.props.createProposal ? <Image style={styles.proposalBtn} source={proposalIcon} />
                                 : <Image style={styles.proposalBtn} source={closeIcon} /> }
         </TouchableOpacity>
       </View>
    );
  }

/* When create proposal clicked */
  onClickCreateProposal = () => {
    Actions.refresh({ createProposal: true });
  }

  onCloseTab = () => {
    Actions.refresh({ createProposal: false });
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#5d95c4',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    flex: 1,
    marginLeft: 15,
  },
  profilePhoto: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  search: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#E9EBEE',

  },
  searchBtnContainer: {
    height: 37,
    paddingLeft: 5,
    paddingTop: 2,
  },
  searchBtn: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: '#5d95c4',
  },
  searchText: {
    flex: 1,
    height: 37,
    fontSize: 15,
    marginTop: 5,
    color: '#5d95c4',
    fontFamily: 'Roboto',
  },
  proposal: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10
  },
  proposalBtn: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    tintColor: '#5d95c4'
  },
});

module.exports = Header;
