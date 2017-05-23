/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  ProfileHistory tab
  TODO do this tab.
*/
'use strict';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, ListView } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as proposalsActions from '../../reducers/proposals/proposalsActions';
import ProposalTitle from '../HomeScreen/ProposalFeed/ProposalTitle.js';

class ProfileHistory extends Component {


  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),
      dataSourceUpdated: false,
    };
  }

  /*
    Recive the user proposals when components mounted
    TODO: (change codes to commented code) make a user api and get
          user proposals instead of filtering the fetched proposals
  */
  componentDidMount() {
    // Proposals updated successfully from api
    // console.log();
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.proposals.proposals.filter(
        (proposal) => { return proposal.user.is_your_proposal === true; })),
      dataSourceUpdated: true });

  //   if (this.props.proposals.proposalsUpdated) {
  //     return;
  //   }
  //   this.props.getUserProposals();
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   // update data source with this.props.proposals
  //   if (this.props.proposals.proposalsUpdated) {
  //     return;
  //   }
  //   if (nextProps.proposals.proposals.length === 0) return;
  //     //console.log('not updated');
  //     this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.proposals.proposals),
  //                    dataSourceUpdated: true });
  }

  render() {
    return (
      <View style={styles.proposalFeed}>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(proposal) => { return this._renderProposalRow(proposal); }}
      />
      </View>
    );
  }

  /*
    Rendering Each row of ListView
    TODO: get the user info and show history for only that user.
    @param proposal: the proposal elements from /data-manager/proposal.js
  */
  _renderProposalRow(proposal) {
    return (
      <View style={styles.rowContainer}>
      <TouchableOpacity style={styles.rowProposalRoot} onPress={this.proposalClicked.bind(this, proposal)}>
      <ProposalTitle text={proposal.title}
                     articles={proposal.articles}
                     discussions={proposal.discussions}
                     categoryIcon={proposal.category_source_fill}
                     deadline={proposal.deadline}
      />
      </TouchableOpacity>
      </View>
    );
  }

  /*
    When the row of proposal clicked
    @param proposal: the proposal elements from /data-manager/proposal.js
    TODO: change the proposal object with proposal id
  */
  proposalClicked = (proposal) => {
    Actions.voting({ type: ActionConst.REFRESH, proposalId: proposal.id });
  }
}

const styles = StyleSheet.create({
  proposalFeed: {
    flex: 8,
    backgroundColor: 'rgb(237, 244, 252)',
    // borderWidth: 2,
    paddingTop: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
    margin: 5,

  },
  rowProposalRoot: {
    flex: 3,
    flexDirection: 'row',
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
export default connect(mapStateToProps, mapDispatchToProps)(ProfileHistory);
