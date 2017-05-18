/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  A shared component representing the Proposal Title
*/
'use strict';
import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HIGH_PRIORITY_DEADLINE = 5;
const MEDIUM_PRIORITY_DEADLINE = 10;

class ProposalTitle extends Component {

  constructor() {
    super();
    this.state = {
      dateLeft: 0,
      date: ''
    };
  }

  // TODO: change this to componentWillReceiveProps to update the proposals
  componentDidMount() {
    const deadlineDate = new Date(this.props.deadline);
    const currentDate = new Date();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     // convert milisecond to day
    const dateLeft = Math.round((deadlineDate - currentDate) / 86400000);
    this.setState({
      dateLeft,
      date: `${monthNames[deadlineDate.getMonth()]} ${deadlineDate.getDate()}`
    });
  }

  render() {
    return (
      <View style={styles.titleRoot}>

      {this.props.fullName &&
      <View style={styles.proposalHeader} >
      {this.props.profilePic !== '' ?
        <Image style={styles.profilePic} source={{ uri: this.props.profilePic }} />
      : <Text> No Image</Text>
      }
       <Text style={styles.fullName}> {this.props.fullName} </Text>

       <View style={styles.deadlineContainer}>
           <Text style={this.calculatePriorityStyle()}>{this.state.dateLeft} Days left</Text>
           <Text style={styles.date}> {this.state.date}</Text>
       </View>

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
          <Icon name='hand-o-up' size={22} color="#7FE57F" />
          <Icon name='hand-o-down' size={22} color="#ff7f7f" />
        </View>
        }
          <View style={styles.categoryContainer}>
          <Image style={styles.category} source={{ uri: this.props.categoryIcon }} />
          </View>

        <View style={styles.extraIcons}>
          <Text style={styles.ar_dis_statistics}>{this.props.articles}</Text>
          <Icon name='paperclip' size={22} color="#5d95c4" />
          <Text style={styles.ar_dis_statistics}>{this.props.discussions}</Text>
          <Icon name='comments-o' size={22} color="#5d95c4" />
        </View>

        </View>
      </View>
    );
  }

  calculatePriorityStyle() {
    if (this.state.dateLeft < HIGH_PRIORITY_DEADLINE) return styles.highPrtyDaysLeft;
    else if (this.state.dateLeft < MEDIUM_PRIORITY_DEADLINE) return styles.mediumPrtyDaysLeft;
    return styles.lowPrtyDaysLeft;
  }
}

const styles = StyleSheet.create({
  titleRoot: {
    flex: 3,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 12,
    paddingRight: 10
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
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
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#5d95c4',

  },
  categoryContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

  },
  ar_dis: {
    width: 20,
    height: null,
  },
  ar_dis_statistics: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginRight: 5,
    marginLeft: 5,
    marginTop: 2.5,
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
    margin: 3,
    marginLeft: 9,
  },
  fullName: {
    flex: 3,
    fontSize: 20
  },
  deadlineContainer: {
    marginRight: 17,
    marginBottom: 14
  },
  date: {
    color: '#5d95c4',
    fontSize: 12,
    // textAlign: 'center',
  },
  highPrtyDaysLeft: {
    color: '#DC143C',
  },
  mediumPrtyDaysLeft: {
    color: '#ffeb3b',
  },
  lowPrtyDaysLeft: {
    color: '#5d95c4',
  },
});

module.exports = ProposalTitle;
