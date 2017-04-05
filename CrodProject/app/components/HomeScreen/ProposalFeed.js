import React, { Component } from 'react';
import { ScrollView, StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView,ViewContainer} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import proposals from '../../data-manager/proposals'
import {Actions, ActionConst} from 'react-native-router-flux';

const voteNoSource = require("../../../img/dislike.png")
const voteYesSource = require("../../../img/like.png")

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
      {!this.props.isProfile &&
        <View style={styles.angleRightRoot}>
          <Icon name={!this.props.changeArrow ? 'angle-right' : 'angle-left'} style={styles.angleRight} size={40} />
        </View>
      }
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(proposal) => {return this._renderProposalRow(proposal, this.props.isProfile)} }
      />

      </View>
    )
  }

  /*
    Rendering Each row of ListView
    TODO: get the user info and show history for only that user.
    @param proposal: the proposal elements from /data-manager/proposal.js
    @param isProfileScreen: {boolean} representing if this is the profile screen to show.
  */
  _renderProposalRow(proposal, isProfileScreen){
    // console.log(proposal);
    return(
      <View>

      <TouchableOpacity style={styles.rowProposalRoot} onPress={()=>this.proposalClicked(proposal)}>
      <View style={styles.titleRoot}>

        <Text style={styles.title}>
          {proposal.title}
        </Text>
        <View style={styles.emoji}>
        <Text> <Icon name='hand-o-up' size={22} color="#7FE57F"/> </Text>
        <Text> <Icon name='hand-o-down' size={22} color="#ff7f7f"/> </Text>
        </View>

      </View>

      {!isProfileScreen &&
              <View style={styles.deadlineRoot}>

              <View style={styles.daysLeft}>
                  <Text style={{color: 'white'}}> 12 days </Text>
              </View>

              <View style={styles.day}>
                  <Text style={{color: '#2575BB', fontSize: 25}}> {proposal.day} </Text>
              </View>

              <View style={styles.date}>
                  <Text style={{color: 'white'}}> {proposal.monthText} {proposal.date} </Text>
              </View>
              </View>
    }

      {
        isProfileScreen &&
        <View style={styles.votesContainer}>
          <Image style={styles.votes} source={voteYesSource}/>
          <Image style={styles.votes} source={voteNoSource}/>
        </View>
      }
      </TouchableOpacity>
      </View>
    )
  }

  /*
    When the row of proposal clicked
    @param proposal: the proposal elements from /data-manager/proposal.js
    TODO: change the proposal object with proposal id
  */
  proposalClicked(proposal){
    Actions.voting({type: ActionConst.REFRESH, proposalId: proposal.id})
  }
}

const styles = StyleSheet.create({
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
    marginTop: -15,
    backgroundColor: 'white',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: '#2575BB',
    borderWidth: 0.2,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'sans-serif',
  },
  emoji: {
    flexDirection: 'row',

  },
  daysLeft:{
    padding: 5,
    backgroundColor: 'red',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  calendarIcon: {
    tintColor: '#2575BB'
  },
  day:{
    padding: 3,
    alignSelf: 'center'
  },
  date:{
    backgroundColor: '#2575BB',
    padding: 15,
    alignSelf: 'center',
    borderColor: '#2575BB',
    borderBottomWidth: 0.2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10

  },
  deadlineRoot: {
    flex: 1,
    marginTop: -15,
    marginLeft: 9,
    backgroundColor: 'white',
    borderColor: '#2575BB',
    borderWidth: 0.2,
    borderRadius: 10,
  },

  angleRightRoot: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#E9EBEE',
    justifyContent: 'center'
  },
  angleRight: {
    color: '#2575BB',
  },
  votesContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

  },
  votes:{
    resizeMode: 'contain',
    marginRight: 10,
  },
});


module.exports = ProposalFeed
