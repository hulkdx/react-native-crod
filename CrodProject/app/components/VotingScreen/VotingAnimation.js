/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  VotingAnimation shows animation of voting (going to left or right)
*/
'use strict';
// Android element elevation defined for middle voting image
import React, { Component } from 'react';
import { StyleSheet, Image, View, Animated, PanResponder, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as proposalsActions from '../../reducers/proposals/proposalsActions';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get('window').height;

const backgroundImage = require('../../../img/crowlogo.png');

// if dragging is less than this number the vote is yes
const voteNo = 30;
// if dragging is bigger than this number the vote is no
const voteYes = WindowWidth - voteNo;

class VotingAnimation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isVoted: false,
      pan: new Animated.ValueXY(),
      colorChange: 'none'
    };

    // panResponder for dragging votes
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => !this.state.isVoted,
      onPanResponderMove: (event, gesture) => {
        Animated.event([null, {
        dx: this.state.pan.x,
        }])(event, gesture);
        this.changeColor(gesture);
      },
      onPanResponderRelease: (e, gesture) => {
          if (this.isDropZone(gesture)) return;
          // Show animation when user not clicked
          Animated.spring(
              this.state.pan,
              { toValue: { x: 0, y: 0 } }
          ).start();
          //TODO: Create animation for color change.
          this.setState({ colorChange: 'none' });
      }
    });
  }

  /*
    @param gesture: (X) position of dragging voting
    @return {boolean}: true => user voted, false => user didnt vote
  */
  isDropZone(gesture) {
    if (gesture.moveX < voteNo) {
      this.setState({ isVoted: true });
      this.onVoted(false);
      return true;
    } else if (gesture.moveX > voteYes) {
      this.setState({ isVoted: true });
      this.onVoted(true);
      return true;
    }
    return false;
  }

  changeColor(gesture) {
    if (gesture.moveX > WindowWidth / 2) {
      this.setState({ colorChange: 'green' });
      return true;
    } else if (gesture.moveX < WindowWidth / 2) {
      this.setState({ colorChange: 'red' });
      return true;
    }
    return false;
  }


  /*
    @param voted {boolean}: true=>voted yes, false=>voted no
  */
  onVoted(voted) {
    // TODO Next shit
    // id = id of the proposal and is different than this.props.proposalId which
    // is id of the row selected.
    if (this.props.proposalId === -1) {
      this.props.votedProposal(this.props.proposals.proposals[this.props.proposals.proposalId].id,
                              voted, this.props.proposals.proposalId);
    } else {
      this.props.votedProposal(this.props.proposals.proposals[this.props.proposalId].id,
                              voted, this.props.proposalId);
    }
    /* TODO: 1. show statistics
       TODO: 2. show total yes/no votes instead of the voting bar */
  }

  render() {
    // user cannot vote anymore for this topic if user is voted
    const isVoted = this.props.proposalId === -1
    ? this.props.proposals.proposals[this.props.proposals.proposalId].are_you_voted
    : this.props.proposals.proposals[this.props.proposalId].are_you_voted;
    if (isVoted) return null;
    return (
      <View style={styles.votingBar} >
        <View style={[styles.votingBarRed, this.state.colorChange === 'green' ? { backgroundColor: this.state.colorChange } : { backgroundColor: 'red' }]} />
        <View style={[styles.votingBarGreen, this.state.colorChange === 'red' ? { backgroundColor: this.state.colorChange } : { backgroundColor: 'green' }]} />
        <View style={styles.votingBarMiddle} >
          <Animated.View style={[this.state.pan.getLayout(), { flex: 1, elevation: 1 }]} {...this.panResponder.panHandlers}>
            <Image source={backgroundImage} style={styles.middleImage} />
          </Animated.View>
        </View>
      </View>
    );
  }

}

const votingHeight = WindowHeight / 19;
const middleButtonBigger = 15;
const middleButtonHeight = votingHeight + middleButtonBigger;
const middleButtonLeft = (WindowWidth / 2) - (middleButtonHeight / 2);

const styles = StyleSheet.create({
  votingBar: {
    height: votingHeight,
    flexDirection: 'row',
  },
  votingBarRed: {
    flex: 3,
    backgroundColor: 'red'
  },
  votingBarMiddle: {
    // flex:1,
    position: 'absolute',
    left: middleButtonLeft,
    top: -middleButtonBigger / 2,
    width: middleButtonHeight,
    height: middleButtonHeight,
  },
  middleImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch'
  },
  votingBarGreen: {
    flex: 3,
    backgroundColor: 'green'
  },
});

// Redux boilerplate
function mapStateToProps(state) {
  return {
    proposals: state.proposals,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(proposalsActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(VotingAnimation);
