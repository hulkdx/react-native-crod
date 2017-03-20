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
        <TouchableOpacity disabled={this.state.isTabClosed} onPress={()=>this._dropdownOpen()}
          style={styles.topBarRoot}>
          <View style={styles.titleProposalRoot}>
            <Text style={styles.textProposal}>choose your proposal</Text>
          </View>
          <Image style={styles.publishImage} source={require('../../../img/publish-button.png')}/>
        </TouchableOpacity>

        {this.state.viewsTab}

      </View>
    )
  }

  _dropdownOpen(){
    this.setState({
      viewsTab:
      <View style={[styles.expandTab]}>
        <Text>catagory</Text>
        <TextInput
          style={styles.textInput}
          placeholder="create a title"/>
        <TextInput
          style={styles.textInput}
          placeholder="create a description"/>
        <Text>attachment</Text>
        <TouchableOpacity
        onPress={()=>this._dropdownClose()}>
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
    flex:1,
    marginLeft: 50,
  },
  titleProposalRoot: {
    flex: 4,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  expandTab: {
    backgroundColor: '#b6b6b6',
  },
  topBarRoot:{
    flexDirection: 'row',
    backgroundColor: '#b6b6b6',
  },
  publishImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    marginRight: 5,
  },
  textInput: {

  }
});

module.exports = Header
