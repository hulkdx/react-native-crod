import React, { Component } from 'react';
import { ScrollView, StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import proposals from '../../data-manager/proposals'

const voteNoSource = require("../../../img/like.png")
const voteYesSource = require("../../../img/dislike.png")


class ProposalFeed extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(proposals),
    };
  }

  render() {
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

    return(
      <TouchableOpacity style={styles.rowProposalRoot} onPress={()=>this.proposalClicked(proposal)}>
      <View style={styles.titleRoot}>
        <Text style={styles.title}>
          {proposal.title}
        </Text>
      </View>

      {!isProfileScreen &&
        <Text style={styles.deadline}>
            {proposal.deadline}
        </Text>
      }
      {
        isProfileScreen &&
        <View style={styles.votesContainer}>
          <Image style={styles.votes} source={voteYesSource}/>
          <Image style={styles.votes} source={voteNoSource}/>
        </View>
      }
      </TouchableOpacity>

    )
  }

  // when the row of proposal clicked
  proposalClicked(proposal){

  }
}

const styles = StyleSheet.create({
  proposalFeed:{
    flexDirection: 'row',
    flex:8,
    backgroundColor: '#ACAEAE'
  },
  rowProposalRoot:{
    backgroundColor: '#EAEBE9',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
  },
  titleRoot: {
    flex: 4,
    alignItems:'center'
  },
  deadline: {
  },
  angleRightRoot: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#1fbff1',
    justifyContent: 'center'
  },
  angleRight: {
    color: 'white',
  },
  votesContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  votes:{
    width:14,
    height:12,
  }
});


module.exports = ProposalFeed
