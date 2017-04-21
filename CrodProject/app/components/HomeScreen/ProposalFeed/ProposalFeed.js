import React, { Component } from 'react';
import { ScrollView, StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView,ViewContainer} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import proposals from '../../../data-manager/proposals'
import ProposalTitle from './ProposalTitle'
import ProposalDeadline from './ProposalDeadline'
import _ from 'underscore'
//import categories from '../../data-manager/categories'
import {Actions, ActionConst} from 'react-native-router-flux'
import PopupDialog, { DialogButton, DialogTitle, SlideAnimation } from 'react-native-popup-dialog'

const voteNoSource = require("../../../../img/dislike.png")
const voteYesSource = require("../../../../img/like.png")
const discussionIcon = require("../../../../img/discussion-icon.png")
const articlesIcon = require("../../../../img/article-icon.png")
const categoryBackground = require("../../../../img/categories/science.png")
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
      proposalsId: 0
    };
  }

  componentDidUpdate(){
    // it will dismiss the popupDialog if the user goes to another screen while it is open.
    if (!_.isUndefined(this.popupDialog)) {this.popupDialog.dismiss();}
  }

  render() {
    return (
      <View style={styles.proposalFeed}>
        <View style={styles.angleRightRoot}>
        <Icon name={!this.props.changeArrow ? 'angle-right' : 'angle-left'} style={styles.angleRight} size={40} />
      </View>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(proposal) => {return this._renderProposalRow(proposal)} }/>
        {/*Pop up called when the onLongPress on any proposal is triggered.
           For it to work run: npm install --save react-native-popup-dialog   */}

           <PopupDialog

             ref={(popupDialog) => { this.popupDialog = popupDialog }}
             dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
             dialogTitle={<DialogTitle title="Proposal Details" />}
             dialogStyle={2}
             height={400}
             actions={[
                 <DialogButton
                   text="Done"
                   textStyle={{color: 'green'}}
                   onPress={() => {
                     this.popupDialog.dismiss();
                   }}
                   key="button-1"
                 />,
               ]}>
               {/* The content of the pop-up dialog. */}
             <ScrollView style={styles.customizePopUp}>

              <View style={styles.rowPopUp}>
              <Text style={styles.caption}> Title: </Text>
              <Text style={styles.text}> {proposals[this.state.proposalsId].title}</Text>
              </View>
              <View style={styles.rowPopUp}>
              <Text style={styles.caption}> Category: </Text>
              <Text style={styles.text}> {proposals[this.state.proposalsId].category} </Text>
              </View>
              <View style={styles.rowPopUp}>
              <Text style={styles.caption}> Deadline: </Text>
              <Text style={styles.text}> {proposals[this.state.proposalsId].monthText} {proposals[this.state.proposalsId].date}, {proposals[this.state.proposalsId].year}</Text>
              </View>
              <View style={styles.rowPopUp}>
              <Text style={styles.caption}> Description: </Text>
              <Text style={styles.text}>{proposals[this.state.proposalsId].description}</Text>
              </View>

             </ScrollView>
            </PopupDialog>


      </View>
    )
  }

  /*
    Rendering Each row of ListView
    TODO: get the user info and show history for only that user.
    @param proposal: the proposal elements from /data-manager/proposal.js
  */
  _renderProposalRow(proposal){

    return(
      <View style={styles.rowContainer}>

      <TouchableOpacity style={styles.proposal} onPress={this.proposalClicked.bind(this, proposal)} onLongPress={this.onLongPress.bind(this,proposal)}>
        <ProposalTitle fullName={proposal.fullName} profilePic={proposal.profilePic} text={proposal.title} articles={proposal.articles} discussions={proposal.discussions}categoryIcon={proposal.categoryIcon} />
      </TouchableOpacity>

      <ProposalDeadline day={proposal.day} date={proposal.date} month={proposal.monthText} />
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
  onLongPress = (proposal) => {
    console.log(proposal.id);
    this.setState({proposalsId: proposal.id})
    this.popupDialog.show()
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
  rowContainer:{
    flex:1,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center'
  },
  proposal:{
    flex:3,
    flexDirection: 'row',
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
  customizePopUp: {
    flex:1,
    marginRight: 10,
    marginLeft: 10,

  },
  rowPopUp: {
    paddingTop: 10,
    alignItems:'flex-start',
    justifyContent: 'flex-start'
  },
  caption: {
    fontSize: 18,
    color: '#88B3D9'
  },
  text: {
    paddingTop: 5,
    fontSize: 18,
    textAlign: 'left'

  }
});


module.exports = ProposalFeed
