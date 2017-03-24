'use strict'
// Android element elevation defined for middle voting image
import React, { Component } from 'react';
import {StyleSheet,Text, Image,View,Animated,PanResponder,Dimensions} from 'react-native';
import Tabs from 'react-native-tabs';
import Articles from './Articles.js'
import Statistics from './Statistics.js'
import Disscussion from './Disscussion.js'
let Window = Dimensions.get('window');

// TODO: Remove it or change it to backgroundImage
const backgroundImage = require("../../../img/backgroundblu.jpg")

// if dragging is less than this number the vote is yes
const voteNo = 30;
// if dragging is bigger than this number the vote is no
const voteYes = Window.width - voteNo;

class Body extends Component {

  constructor(props){
      super(props);
      this.state = {
        page      : 'articles',
        isVoted   : false,
        pan       : new Animated.ValueXY()
      };

      // panResponder for dragging votes
      this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder    : () => !this.state.isVoted,
        onPanResponderMove              : Animated.event([null,{
            dx  : this.state.pan.x,
        }]),
        onPanResponderRelease           : (e, gesture) => {
            if(this.isDropZone(gesture)) return
            // Show animation when user not clicked
            Animated.spring(
                this.state.pan,
                {toValue:{x:0,y:0}}
            ).start();
        }
      });

  }

  /*
    @param gesture: (X) position of dragging voting
    @return {boolean}: true => user voted, false => user didnt vote
  */
  isDropZone(gesture){
    // console.log('gesture.moveX : ' + gesture.moveX);
    // console.log('voteNo : ' + voteNo);
    // console.log('voteYes : ' + voteYes);
    if (gesture.moveX < voteNo) {
      this.setState({isVoted   : true})
      this.onVoted(true)
      return true;
    }
    else if (gesture.moveX > voteYes) {
      this.setState({isVoted   : true})
      this.onVoted(false)
      return true;
    }
    else return false;
  }

  /*
    @param voted {boolean}: true=>voted yes, false=>voted no
  */
  onVoted(voted){
    /* TODO: 1. show statistics */
    /* TODO: 2. show total yes/no votes instead of the voting bar */
    /* TODO: 3. user cannot vote anymore for this topic */
  }

  render() {
    return (
      <Image source={backgroundImage} style={styles.container}>
      {/* Voting Section */}
        <View style={styles.votingBar}>
          <View style={styles.votingBarRed}/>
          <View style={styles.votingBarMiddle} >
            <Animated.View style={[this.state.pan.getLayout(),{flex:1, borderWidth:2, elevation:1}]} {...this.panResponder.panHandlers}>
              <Image source={backgroundImage} style={styles.middleImage} />
            </Animated.View>
          </View>
          <View style={styles.votingBarGreen}/>

        </View>
      {/* Articles / Disscussion Tab Section */}
      <View style={styles.tabContainer}>
      <Tabs selected={this.state.page}
          onSelect={el=>this.onSelectedTab(el)}
          style={styles.tabs}>
          <Text name="articles" style={styles.textStyle}
                selectedIconStyle={styles.tabsSelectedOne}>Articles</Text>
          <Text name="disscussion" style={styles.textStyle}
                selectedIconStyle={styles.tabsSelectedTwo}>Disscussion</Text>
          {/* TODO: Add statistics when voted */}
      </Tabs>
      </View>
      {/* Articles / Comments / Statistics body Section */}
      <View style={styles.bodyContainer}>
        {this._renderExtraParts()}
      </View>

      </Image>

    )
  }

  _renderExtraParts(){
    switch (this.state.page) {
      case 'articles':
        return(
          <Articles />
        )
      case 'disscussion':
      return(
        <Disscussion />
      )
      case 'statistics':
      return(
        <Statistics />
      )
      default:

    }
  }

  onSelectedTab(el){
    this.setState({page:el.props.name})
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 5,
    width: null, height: null,
  },
  votingBar:{
    flex:1,
    flexDirection: 'row',
  },
  votingBarRed:{
    flex:3,
    backgroundColor: 'red'
  },
  votingBarMiddle:{
    flex:1,
  },
  middleImage:{
    flex:1,
    width:null,
    height:null,
  },
  votingBarGreen:{
    flex:3,
    backgroundColor: 'green'
  },
  tabContainer:{
    flex: 2,
    backgroundColor: 'white'
  },
  bodyContainer:{
    flex: 10,
    backgroundColor: 'white',
  },
  tabsSelectedOne: {
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#1fbff1'
  },
  tabsSelectedTwo: {
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#1fbff1'
  },
  textStyle:{
    fontSize: 18.5
  },
});

module.exports = Body
