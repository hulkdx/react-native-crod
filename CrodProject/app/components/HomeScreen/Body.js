import React, { Component } from 'react';
import { ScrollView, PropTypes, StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView} from 'react-native';
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
                openMenuOffset = {80}
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  leftSideMenu: {
    borderRightWidth: 1,
    borderRightColor: '#88B3D9'

  }
});


module.exports = Body
