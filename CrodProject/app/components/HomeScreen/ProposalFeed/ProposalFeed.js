/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  A shared component representing the ProposalFeed
*/
'use strict'
import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet,TouchableOpacity,Text,View,ListView} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Actions, ActionConst} from 'react-native-router-flux'
import PopupDialog, { DialogButton, DialogTitle, SlideAnimation } from 'react-native-popup-dialog'
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'underscore'
import * as proposalsActions from '../../../reducers/proposals/proposalsActions'

import ProposalTitle from './ProposalTitle'


class ProposalFeed extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      proposalsId: 0
    };
  }

  componentDidUpdate(){
    // it will dismiss the popupDialog if the user goes to another screen while it is open.
    if (!_.isUndefined(this.popupDialog)) {this.popupDialog.dismiss();}
  }

  // Recive the proposals when components mounted
  componentDidMount() {
    this.props.getProposals();
  }

  componentWillReceiveProps(nextProps){
    // TODO update data source with this.props.proposals somehow
    if (nextProps.proposals.proposals.length === 0) return;
    this.setState({dataSource: this.state.dataSource.cloneWithRows(nextProps.proposals.proposals)})
  }

  render() {
    return (
      <View style={styles.proposalFeed}>
        <View style={styles.angleRightRoot}>
        <Icon name={!this.props.changeArrow ? 'angle-right' : 'angle-left'} style={styles.angleRight} size={40} />
      </View>
      {this.props.proposals.isFetching &&
        <ActivityIndicator style={styles.loadingsIndicator} size="large" />
     }
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderProposalRow}/>

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
         {this._PopupDialogContent()}
      </PopupDialog>


      </View>
    )
  }

/*
  The content of the pop-up dialog.
  This will show when users long click on proposals
  TODO: Update this information with back-end
*/
  _PopupDialogContent(){
    return(
      <ScrollView style={styles.customizePopUp}>
{/*
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
*/}
      </ScrollView>
    )
  }

  /*
    Rendering Each row of ListView
    TODO: get the user info and show history for only that user.
    @param proposal: the proposal elements from /data-manager/proposal.js
  */
  _renderProposalRow = (proposal) => {
    return(
      <View style={styles.rowContainer}>

      <TouchableOpacity style={styles.proposal} onPress={this.proposalClicked.bind(this, proposal)} onLongPress={this.onLongPress.bind(this,proposal)}>
        <ProposalTitle fullName={proposal.user.first_name + " " + proposal.user.last_name}
        profilePic={proposal.user.profile_pic_url}
        text={proposal.title}
        articles={proposal.articles}
        discussions={proposal.discussions}
        categoryIcon={proposal.category_source_fill}
        deadline={proposal.deadline} />
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
  onLongPress = (proposal) => {
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
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center'
  },
  proposal:{
    flex:3,
    flexDirection: 'row',
  },
  categoryIcon: {
    tintColor: '#5d95c4'
  },
  angleRightRoot: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#E9EBEE',
    justifyContent: 'center'
  },
  angleRight: {
    color: '#5d95c4',
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
    color: '#5d95c4'
  },
  text: {
    paddingTop: 5,
    fontSize: 18,
    textAlign: 'left'
  },
  loadingsIndicator:{
    flex:10
  }
});

// Redux boilerplate
function mapStateToProps (state) {
  return {
    proposals: state.proposals,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(proposalsActions, dispatch)
}
export default connect(mapStateToProps , mapDispatchToProps)(ProposalFeed);
