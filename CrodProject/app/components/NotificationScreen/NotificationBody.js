import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView} from 'react-native';
import notifications from '../../data-manager/notifications'
const dividerImage = require("../../../img/dividerblue.jpg")

class NotificationBody extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(notifications),
    };
  }

  render() {
    return (
      <View style={styles.proposalFeed}>

      <ListView
      dataSource={this.state.dataSource}
      renderRow={(notification) => {return this._renderProposalRow(notification)} }
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
  _renderProposalRow(notification){
    // console.log(proposal);
    return(
      <View>

      <TouchableOpacity style={styles.notification}>
        <View style={styles.leftPart}>
        <Image source={notification.profileImage}/>
        </View>

        <View style={styles.rightPart}>

        <Text> {notification.fullName} commented on your post</Text>
        <Text> {notification.minAgo} minutes ago</Text>

        </View>

      </TouchableOpacity>
      <Image style={{height: 2}} source={dividerImage}/>
      </View>
    )
  }

  /*
    When the row of proposal clicked
    @param proposal: the proposal elements from /data-manager/proposal.js
    TODO: change the proposal object with proposal id
  */
//  proposalClicked(proposal){
//    Actions.voting({type: ActionConst.REFRESH, proposalId: proposal.id})
//  }
}

const styles = StyleSheet.create({
  notification:{
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
    backgroundColor: '#fffcf7'
  },
  leftPart:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightPart:{
    flex: 5,

    alignItems: 'flex-start',
    justifyContent: 'center'
  }

});

module.exports = NotificationBody
