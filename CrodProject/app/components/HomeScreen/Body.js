/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Body This file contains SideMenu and ProposalFeed (on the right hand of
  SideMenu) Check the SideMenu https://github.com/react-native-community/react-native-side-menu
  For more informatin of the instruction.
*/
'use strict'
import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import CategoryMenu from "./CategoryMenu.js"
import ProposalFeed from "./ProposalFeed/ProposalFeed.js"

import LeftSideMenu from "./SideMenu.js";

class Body extends Component {
  state = {
      isOpen: false,
    };

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  render() {
    const menu = <CategoryMenu />;

    return (
      <View style={styles.leftMenu}>
      <LeftSideMenu
                menu={menu}
                openMenuOffset = {90}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}
                style={styles.leftSideMenu} >
      <ProposalFeed changeArrow={this.state.isOpen}/>
      </LeftSideMenu>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  leftMenu:{
    flex:8,
    backgroundColor: "#5d95c4",
  },
  leftSideMenu: {
    borderRightWidth: 1,
    borderRightColor: '#5d95c4'

  }
});


module.exports = Body
