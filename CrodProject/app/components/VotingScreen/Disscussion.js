/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Disscussion tab bar
*/
'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, ListView, TouchableOpacity } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import AutoExpandingTextInput from 'react-native-auto-expanding-textinput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Kohana from './TextInputAnimation/Kohana.js';
import * as discussionActions from '../../reducers/discussion/discussionActions';
import * as proposalsActions from '../../reducers/proposals/proposalsActions';
import ProposalVotes from './ProposalVotes';


// let disscussion = [
//   {
//    user: {
//      profile_pic_url: 'http://i.imgur.com/flVj90L.png',
//      first_name: 'Saba',
//      last_name: 'J'
//    },
//    comment: "Yes, Facebook is totally awesome! It's so cool, you can connect with peepz all over your State and even all the way down to Oklahoma. I have more than 1000 friendz by now, duh!",
//    upvoted: 5,
//    downvoted: 1,
//    isUpvoted: null, },
//   {
//    user: {
//     profile_pic_url: 'http://i.imgur.com/flVj90L.png',
//     first_name: 'Coby',
//     last_name: 'Z'
//    },
//    comment: "I believe there's many sides to this story and it's hard to depict the entire picture. It may look like are spending more time interacting through Facebook than in real life, but the time Americans spend behind their computers is significant anyway. I applaud Facebook for giving us the means to connect to people easily from a long distance and the ease of gathering people from an area. Also, it gives us a break whenever we're vegetating behind our office desks!",
//    upvoted: 10,
//    downvoted: 2,
//    isUpvoted: null, },
// ];


class Disscussion extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      // dataSource: ds.cloneWithRows(disscussion),
      dataSource: ds,
      proposalId: -2,
    };
  }

  // initially update it with this
  componentDidMount() {
    // if (this.props.discussion.updated) return;
    const proposalId = this.props.proposalId === -1 ? this.props.proposals.proposals[this.props.proposals.proposalId].id : this.props.proposals.proposals[this.props.proposalId].id;
    this.setState({ proposalId });
    this.props.getDiscussions(proposalId);
  }

  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps, proposalId = ' + nextProps.proposalId + 'this.props.discussion.updated=' + this.props.discussion.updated);
    if (nextProps.proposalId) {
      let proposalId;
      if (nextProps.proposalId === -1) {
        proposalId = nextProps.proposals.proposalId ? this.props.proposals.proposals[nextProps.proposals.proposalId].id : this.props.proposals.proposals[this.props.proposals.proposalId].id;
      } else {
        proposalId = this.props.proposals.proposals[nextProps.proposalId].id;
      }
      // console.log('proposalId:'+proposalId);
      if (proposalId !== this.state.proposalId) {
        this.setState({
          proposalId,
          dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
         });
        // Again fetch the data
        // console.log('fetch, proposalId:'+proposalId+'  this.state.proposalId:'+this.state.proposalId);
        this.props.getDiscussions(proposalId);
        return;
      }
      // console.log('updating');
      if (this.state.dataSource.getRowCount() === 0 && nextProps.discussion) {
        // console.log('updating nextProps');
        this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.discussion.discussion), });
      } else if (this.state.dataSource.getRowCount() === 0 && this.props.discussion) {
        // console.log('updating props');
        this.setState({ dataSource: this.state.dataSource.cloneWithRows(this.props.discussion.discussion), });
      }
    }
    // update data source with this.props.proposals
    if (this.props.discussion.updated) return;
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView style={{ flex: 1, }}
        dataSource={this.state.dataSource}
        renderRow={(discussion, sectionID, rowID) => { return this._renderDisscussionRow(discussion, sectionID, rowID); }}
        enableEmptySections
        />

        <View style={styles.createDiscussion}>
        <TouchableOpacity style={styles.profileContainer} onPress={() => { Actions.profile({ type: ActionConst.REFRESH }); }}>
        {/* TODO<Image source={profilePhoto} style={styles.profilePhoto} /> */}
        </TouchableOpacity>
        <AutoExpandingTextInput
          style={styles.shareText}
          underlineColorAndroid={'transparent'}
          enablesReturnKeyAutomatically
          returnKeyType="done"
          minHeight={40}
          maxHeight={1000}
          placeholder="open a discussion ..."
          placeholderTextColor='#bcbcbb'
          onChangeHeight={() => {}}
        />
        <TouchableOpacity style={styles.shareButton} onPress={this.shareClicked}>
          <Icon name='send-o' size={25} color={'#5d95c4'} />
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  _renderDisscussionRow(rowData, sectionID, rowID) {
    return (
      <View style={[styles.disscussionContainer]}>

        <View style={styles.disscussionContainerTop}>

                <View style={styles.topBarContainer}>
                    <View style={styles.discussionImageContainer}>
                    <Image style={styles.profileImage} source={{ uri: rowData.user.profile_pic_url }} />
                    <ProposalVotes isClickable
                                   votedYes={rowData.upvoted}
                                   style={styles.votes}
                                   votedNo={rowData.downvoted}
                                   votedClicked={this.votedClicked}
                    />
                    </View>

                <View style={styles.commentContainer}>
                    <Text style={styles.fullNameText}>{rowData.user.first_name} {rowData.user.last_name}</Text>
                    <Text style={styles.commentText}>{rowData.comment}</Text>
                </View>

                </View>

            <View style={styles.bottomBarCommentContainer}>
            <View style={styles.leftSideBottomBar}>
              <View style={styles.replyTextContainer}>
                <Text style={styles.replyText}>0</Text>
                <Icon name={'comments-o'} size={22.5} color={'#5d95c4'} style={styles.arrowIcon} />
              </View>
              <TouchableOpacity style={styles.replyTextContainer} onPress={this.replyClicked.bind(this, rowID)}>
                <Text style={styles.replyText}>Reply</Text>
                <Icon name={'angle-double-down'} size={25} color={'#5d95c4'} style={styles.arrowIcon} />
              </TouchableOpacity>
              </View>
              <View style={styles.rightSideBottomBar}>
              <TouchableOpacity style={styles.voteUpDown} onPress={this.upVoteClicked.bind(this, rowID)}>
                <Text style={{ color: '#bcbcbb' /* TODO rowData[rowID].isUpvoted ? '#228b22' : '#bcbcbb'*/ }}> Up </Text>
                <Icon name={'hand-o-up'} size={20} color={'#bcbcbb' /*rowData[rowID].isUpvoted ? '#228b22' : '#bcbcbb'*/} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.voteUpDown} onPress={this.downVoteClicked.bind(this, rowID)}>
                <Icon name={'hand-o-down'} size={20} color={'#bcbcbb' /*(rowData[rowID].isUpvoted === null) || disscussion[rowID].isUpvoted ? '#bcbcbb' : '#DC143C'*/} />
                <Text style={{ color: '#bcbcbb' /* TODO rowData[rowID].isUpvoted ? '#228b22' : '#bcbcbb'*/ }}> Down </Text>
              </TouchableOpacity>
              </View>
            </View>

        </View>

        {rowData.selected &&

          <View style={styles.replyContainer}>

          <Kohana
          style={styles.replyTextInput}
          label={'Leave a Reply'}
          iconClass={Icon}
          iconName={'mail-forward'}
          iconColor={'#5d95c4'}
          labelStyle={{ color: '#E9EBEE' }}
          inputStyle={{ color: 'black' }}
          />

          <TouchableOpacity style={styles.shareButton} onPress={this.repliedToComment}>
            <Icon name={'paper-plane-o'} size={22.5} color={'#5d95c4'} style={styles.replyBtn} />
          </TouchableOpacity>
          </View>
        }

      </View>
    );
  }
/*
isUpdated changes according to @param toggleVoting
      null -> default value, in other words the user has not voted yet.
      true -> upVoteClicked(),
      false -> downVoteClicked()
*/
  updateDiscussion(toggleVoting, rowID) {
    // disscussion = disscussion.map((row, i) => {
    //   return {
    //     ...row,
    //     isUpvoted: (i == rowID) ? toggleVoting : row.isUpvoted
    //   };
    // });
    // this.setState({ dataSource: this.state.dataSource.cloneWithRows(disscussion) });
  }

  upVoteClicked = (rowID) => {
      this.updateDiscussion(true, rowID);
  }
  downVoteClicked = (rowID) => {
      this.updateDiscussion(false, rowID);
  }

  /*
    @param vote: {bolean} true: voted yes, false: voted no
    TODO: Add votes
  */
  votedClicked = () => {
  }

  /*
    When reply button clicked, it shows the TextInput on
    _renderDisscussionRow; it clones the database and put selected to true on
    rowID
    TODO: it is a bad practice to clone the rows for checking selected reply,
    check other solutions. But I think its the only practice.
  */
  replyClicked = (rowID) => {
    // disscussion = disscussion.map((row, i) => {
    //   return {
    //     ...row,
    //     selected: i == rowID
    //   };
    // });
    // this.setState({ dataSource: this.state.dataSource.cloneWithRows(disscussion) });
  }

  /*
    When the user replied to a comment
    TODO: check for validation
    TODO: Add reply
    TODO: it is a bad practice to clone the rows for checking selected reply,
    check other solutions.
  */
  repliedToComment = () => {
    // Hide reply
    // const clone = disscussion.map((row) => {
    //   return {
    //     ...row,
    //     selected: false
    //   };
    // });
    // this.setState({ dataSource: this.state.dataSource.cloneWithRows(clone) });
  }


  shareClicked = () => {
    // TODO: If its not empty
    // TODO: Add Comments
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(237, 244, 252)',
  },
  disscussionContainer: {
    flex: 1,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 10,
    paddingRight: 5,
    paddingLeft: 5
  },
  createDiscussion: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#5d95c4',
    paddingTop: 10,
    paddingBottom: 10
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  profilePhoto: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  replyContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E9EBEE',
    marginTop: 10
  },
  shareText: {
    flex: 1,
    marginLeft: 15,
    marginRight: 10,
    paddingTop: 10,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: StyleSheet.hairlineWidth,
    shadowOffset: {
      height: StyleSheet.hairlineWidth,
    },
    zIndex: 1,
  },
  shareButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  disscussionContainerTop: {
    flex: 1,
    alignItems: 'center',
  },
  votes: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  discussionImageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  topBarContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  commentContainer: {
    flex: 4,
    width: 0,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  fullNameText: {
    fontSize: 20,
    fontFamily: 'Roboto'
  },
  commentText: {
    fontSize: 16,
    paddingTop: 15,
    fontFamily: 'Roboto'
  },
  bottomBarCommentContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  replyTextContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  replyText: {
    fontSize: 15,
    color: '#bcbcbb'
  },
  arrowIcon: {
     marginLeft: 3,
  },
  votesContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  votesImageContainer: {
    flex: 1,
    marginRight: 10,
  },
  votesImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  replyTextInput: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  leftSideBottomBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightSideBottomBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  voteUpDown: {
    flexDirection: 'row',
    paddingRight: 7.5
  },
  animatedReply: {
    width: 30,
    height: 30,

  }
});

// Redux boilerplate
function mapStateToProps(state) {
  return {
    discussion: state.discussion,
    proposals: state.proposals,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...discussionActions, ...proposalsActions }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Disscussion);
