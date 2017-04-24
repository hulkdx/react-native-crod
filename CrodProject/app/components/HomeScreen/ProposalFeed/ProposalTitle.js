import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const attachmentSource = require("../../../../img/attachment.png")
const commentSource = require("../../../../img/comment.png")

class ProposalTitle extends Component {

  render() {
    return (
      <View style={styles.titleRoot}>

      {this.props.profilePic &&
      <View style={styles.proposalHeader} >
       <Image style={styles.profilePic} source={this.props.profilePic} />
       <Text style={styles.fullName}> {this.props.fullName} </Text>
      </View>
      }
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {this.props.text}
        </Text>
      </View>

        <View style={styles.bottomContainer}>

        {this.props.emoji &&
        <View>
          <Icon name='hand-o-up' size={22} color="#7FE57F"/>
          <Icon name='hand-o-down' size={22} color="#ff7f7f"/>
        </View>
        }

          <Image style={styles.category} source={this.props.categoryIcon}/>

        {/* TODO: get these numbers */}
        <View style={styles.extraIcons}>
          <Text style={styles.ar_dis_statistics}>{this.props.articles}</Text>
          <Image style={styles.ar_dis} source={attachmentSource}/>
          <Text style={styles.ar_dis_statistics}>{this.props.discussions}</Text>
          <Image style={styles.ar_dis} source={commentSource}/>
        </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleRoot: {
    flex: 3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  titleContainer:{
    flex:1,
    justifyContent:'flex-start',
    paddingLeft: 12,
    paddingRight: 10
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'sans-serif',

  },
  bottomContainer: {
    flexDirection: 'row',
    height: 20,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 10,
    marginTop: 20,
  },
  category: {
    width: 20,
    height: null,
    resizeMode: 'contain',
    tintColor: '#88B3D9'
  },
  ar_dis: {
    width: 20,
    height: null,
    resizeMode: 'contain',
  },
  ar_dis_statistics: {
    color: '#88B3D9',
    fontWeight: 'bold',
    marginRight: 5
  },
  extraIcons: {
    flex: 1,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  proposalHeader: {
    marginTop: 7,
    marginBottom: 7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  profilePic: {
    resizeMode: 'center',
    height: 45,
    width: 45,
    margin:3,
    marginLeft: 9,
  },
  fullName: {
    flex: 3,
    fontSize: 18
  },
});

module.exports = ProposalTitle
