'use strict'

import React, { Component } from 'react';
import {StyleSheet,Text, Image,View,ListView,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const disscussion = [
  {profileImage: require("../../../img/profile-icon.png"),
   comment: "comment One bla bla bla",
   upvoted: 10,
   downvoted: 2,},
  {profileImage: require("../../../img/profile-icon.png"),
   comment: "comment two bla bla bla",
   upvoted: 5,
   downvoted: 1,},
]
const dividerImage = require("../../../img/dividerblue.jpg")
const voteNoSource = require("../../../img/dislike.png")
const voteYesSource = require("../../../img/like.png")

class Disscussion extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(disscussion),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView style={{flex:1,}}
        dataSource={this.state.dataSource}
        renderRow={(disscussion) => {return this._renderDisscussionRow(disscussion)} }
        />

        <View style={styles.shareContainer}>
        <TextInput style={styles.shareText} placeholder="your opinion counts" />
        <TouchableOpacity style={styles.shareButton} onPress={this.shareClicked}>
          <Text>Share</Text>
        </TouchableOpacity>
        </View>
      </View>

    )
  }

  _renderDisscussionRow(disscussion){
    return(
      <View style={styles.disscussionContainer}>
        <View style={styles.disscussionContainerTop}>
        <View style={{flex:1,}}>
        <Image style={styles.profileImage} source={disscussion.profileImage}/>
        </View>

          <View style={styles.commentContainer}>
            <Text style={styles.commentText}>
              {disscussion.comment}
            </Text>
            <TouchableOpacity style={styles.replyTextContainer} onPress={this.replyClicked}>
              <Text style={styles.replyText}>reply</Text>
              <Icon name="angle-down" style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>

          <View>
          </View>
          <View style={styles.votesContainer}>
            <TouchableOpacity style={styles.votesImageContainer} onPress={this.votedClicked.bind(this,true)}>
              <Image style={styles.votesImage} source={voteYesSource}/>
              <Text style={styles.voteYesText}>{disscussion.upvoted}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.votesImageContainer} onPress={this.votedClicked.bind(this,false)}>
              <Image style={styles.votesImage} source={voteNoSource}/>
              <Text style={styles.voteNoText}>{disscussion.downvoted}</Text>
            </TouchableOpacity>

          </View>
        </View>
        <Image style={{height: 2}} source={dividerImage}/>

      </View>
    )
  }

  /*
    @param vote: {bolean} true: voted yes, false: voted no
  */
  votedClicked = (vote) =>{

  }

  replyClicked = () => {
  }

  shareClicked = () => {
    // TODO: If its not empty
    // TODO: Add Comments
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  disscussionContainer: {
    flex:1,
  },
  shareContainer:{
    flexDirection: 'row',
  },
  shareText: {
    flex:1,
  },
  shareButton:{
    borderWidth: 1,
    justifyContent: 'center'
  },
  disscussionContainerTop:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
  },
  profileImage: {
    flex:1,
    width:null, height: null,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  commentContainer: {
    flex:3,
    flexDirection: 'column',
    paddingTop: 20,
    paddingLeft: 10,
  },
  commentText: {

  },
  replyTextContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  replyText: {
    fontSize: 10,
    color: '#bcbcbb'
  },
  arrowIcon: {
    marginLeft:2,
    color: '#bcbcbb'
  },
  votesContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  votesImageContainer:{
    flex:1,
    marginRight: 10,
  },
  votesImage:{
    flex:1,
    width: null, height: null,
    resizeMode: 'contain',
  },
  voteYesText: {
    alignSelf:'center',
    color: 'green',
  },
  voteNoText: {
    alignSelf:'center',
    color: 'red',
  },
});

module.exports = Disscussion
