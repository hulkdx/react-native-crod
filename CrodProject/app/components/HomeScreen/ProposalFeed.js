import React, { Component } from 'react';
import { ScrollView, StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView,ViewContainer} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import proposals from '../../data-manager/proposals'
import ProposalTitle from './ProposalTitle'
//import categories from '../../data-manager/categories'
import {Actions, ActionConst} from 'react-native-router-flux';

const voteNoSource = require("../../../img/dislike.png")
const voteYesSource = require("../../../img/like.png")
const discussionIcon = require("../../../img/discussion-icon1.png")
const articlesIcon = require("../../../img/articles-icon1.png")
const categoriesIcon = require("../../../img/categories/science_small.png")
const categoryBackground = require("../../../img/category-background.png")
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
      <View style={styles.titleRoot}>
        <View style={styles.proposalHeader} >
         <Image style={styles.profilePic} source={proposal.profilePic} />
         <Text style={styles.fullName}> {proposal.fullName} </Text>
        </View>
        <Image source={categoryBackground} style={styles.categoryBackground}>
        <Text style={styles.title}>
          {proposal.title}
        </Text>
        </Image>
        <View style={styles.emoji}>
        <View style={styles.leftEmoji}>
        <Image source={articlesIcon} />
        <Image source={discussionIcon} />
        </View>
        <View style={styles.rightEmoji}>
        <Icon name='hand-o-up' size={25} color="#7FE57F" />
        <Icon name='hand-o-down' size={25} color="#C00"/>

        </View>
        </View>

      </View>


      <View style={styles.deadlineRoot}>

      <View style={styles.daysLeft}>
        <Text style={{color: 'white', textAlign: 'center'}}> 12 days </Text>
      </View>

      <View style={styles.day}>
        <Text style={{color: '#88B3D9', fontSize: 25, textAlign: 'center',}}> {proposal.day} </Text>
      </View>

      <View style={styles.date}>
        <Text style={{color: 'white', textAlign: 'center',}}> {proposal.monthText} {proposal.date} </Text>
      </View>

      </View>

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
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start'

  },
  titleRoot: {
    flex: 3,
    //marginTop: -15,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: '#2575BB',
    borderWidth: 0.2,
    borderRadius: 10,
    alignItems: 'flex-start'

  },
  proposalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  profilePic: {
    flex: 1,
    // height: null, width: null,
    resizeMode: 'center',
    height: 45,

  },
  fullName: {
    flex: 3,
    fontSize: 18
},
  title: {
    // height: 100,
    fontSize: 22,
    fontFamily: 'sans-serif',

  },
  emoji: {
    // height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  leftEmoji: {
    flexDirection: 'row',
    flex: 1,

  },
  rightEmoji: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 2,
  },
  categoryIcon: {
    tintColor: '#88B3D9'

  },
  daysLeft:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#C00',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  day:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  date:{
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#88B3D9',
    borderColor: '#88B3D9',
    borderBottomWidth: 0.2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  deadlineRoot: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 9,
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
