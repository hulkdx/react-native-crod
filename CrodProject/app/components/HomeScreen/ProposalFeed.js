import React, { Component } from 'react';
import { ScrollView, StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView,ViewContainer} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import proposals from '../../data-manager/proposals'
import ProposalTitle from './ProposalTitle'
import ProposalDeadline from './ProposalDeadline'
//import categories from '../../data-manager/categories'
import {Actions, ActionConst} from 'react-native-router-flux';

const voteNoSource = require("../../../img/dislike.png")
const voteYesSource = require("../../../img/like.png")
const discussionIcon = require("../../../img/discussion-icon.png")
const articlesIcon = require("../../../img/article-icon.png")
const categoryBackground = require("../../../img/categories/science.png")
var moment = require('moment')

//var deadline = moment([2007, 0, 29]);
//var b = moment([2007, 0, 2]);
//var diff = a.diff(b, 'days')



class ProposalFeed extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(proposals),
    };
  }

  render() {
    //console.log(diff)
    return (
      <View style={styles.proposalFeed}>
        <View style={styles.angleRightRoot}>
          <Icon name={!this.props.changeArrow ? 'angle-right' : 'angle-left'} style={styles.angleRight} size={40} />
        </View>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(proposal) => {return this._renderProposalRow(proposal)} }
      />

      </View>
    )
  }

  /*
    Rendering Each row of ListView
    TODO: get the user info and show history for only that user.
    @param proposal: the proposal elements from /data-manager/proposal.js
  */
  _renderProposalRow(proposal){
    // console.log(proposal);
    return(
      <View>

      <TouchableOpacity style={styles.rowProposalRoot} onPress={()=>this.proposalClicked(proposal)}>


      <ProposalTitle fullName={proposal.fullName} profilePic={proposal.profilePic} text={proposal.title} category={categoryBackground} />


      <ProposalDeadline day={proposal.day} date={proposal.date} month={proposal.monthText} />

      </TouchableOpacity>
      </View>
    )
  }

  /*
    When the row of proposal clicked
    @param proposal: the proposal elements from /data-manager/proposal.js
    TODO: change the proposal object with proposal id
  */
  proposalClicked = (proposal) => {
    Actions.voting({type: ActionConst.REFRESH, proposalId: proposal.id})
  }
}

const styles = StyleSheet.create({
  categoryBackground: {
    resizeMode: 'cover',
    marginTop: 15,
    marginBottom: 30,
  },
  proposalFeed:{
    flexDirection: 'row',
    flex:8,
    backgroundColor: '#E9EBEE'
  },
  rowProposalRoot:{
    flex:1,
    flexDirection: 'row',
    margin: 5,
  },
  categoryIcon: {
    tintColor: '#88B3D9'
  },
  angleRightRoot: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#E9EBEE',
    justifyContent: 'center'
  },
  angleRight: {
    color: '#88B3D9',
  },
});


module.exports = ProposalFeed
