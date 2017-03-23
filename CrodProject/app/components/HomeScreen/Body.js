import React, { Component } from 'react';
import {Dimensions, ScrollView, PropTypes, StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView} from 'react-native';
import CategoryMenu from "./CategoryMenu.js"
import ProposalFeed from "./ProposalFeed.js"

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
      <LeftSideMenu menu={menu}  openMenuOffset = {80}
      isOpen={this.state.isOpen}
      onChange={(isOpen) => this.updateMenuState(isOpen)} >
      <ProposalFeed changeArrow={this.state.isOpen} isProfile={this.props.isProfile}/>
      </LeftSideMenu>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  leftMenu:{
    flex:8,
    backgroundColor: "#1fbff1"
  }
});


module.exports = Body
