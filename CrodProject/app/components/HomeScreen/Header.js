import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';




class Header extends Component {
  state = {
    viewsTab: [],
    isTabClosed: false,
  };

  render() {
    return (
      <View>
        <TouchableOpacity disabled={this.state.isTabClosed} onPress={()=>this._dropdownOpen()} style={[styles.proposal, {flexDirection: 'row'}]}>
          <Text style={[styles.createProposal, {flex: 1,}]}>Choose your proposal</Text>
          <Text style={styles.publish}> Publish </Text>
        </TouchableOpacity>

        {this.state.viewsTab}

      </View>


    )
  }

  _dropdownOpen(){
    this.setState({
      viewsTab:
      <View style={[styles.proposal]}>
        <Text>catagory</Text>
        <TextInput
          style={styles.createProposal}
          placeholder="create a title"/>
        <TextInput
          style={styles.createProposal}
          placeholder="create a description"/>
        <Text>attachment</Text>
        <TouchableOpacity onPress={()=>this._dropdownClose()}>
          <Text>done</Text>
        </TouchableOpacity>
      </View>
      ,
      isTabClosed: true
    });
  }

  _dropdownClose(){
    this.setState((state) => ({viewsTab: [], isTabClosed: false}))
  }

}

const styles = StyleSheet.create({
  createProposal: {
    marginLeft: 50,
  },
  proposal:{
    backgroundColor: 'grey',
  },
  publish: {
    marginRight: 30
  }
});

module.exports = Header
