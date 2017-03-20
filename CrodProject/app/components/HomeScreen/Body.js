import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView} from 'react-native';

const proposals = [
  {proposalName: "firstOne", proposalIcon: "firstOne"},
  {proposalName: "two", proposalIcon: "firstOne"},
  {proposalName: "firstOne", proposalIcon: "firstOne"},
  {proposalName: "three", proposalIcon: "firstOne"},
]

class Body extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      viewsTab: [],
      isTabClosed: false,
      dataSource: ds.cloneWithRows(proposals),
    };
  }

  render() {
    return (
      <View style={{flex:8}}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(proposal) => {return this._renderProposalRow(proposal)} }
        />
      </View>


    )
  }

  _renderProposalRow(proposal){
    return(
      <View style={styles.rowProposalRoot}>
        <Text>
          {proposal.proposalIcon}
        </Text>
        <Text style={{marginRight: 40,}}>
          {proposal.proposalName}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rowProposalRoot:{
    flexDirection: 'row',
  }
});

module.exports = Body
