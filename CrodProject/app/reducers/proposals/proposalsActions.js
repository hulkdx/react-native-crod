/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Actions
*/
'use strict';
import { Actions, ActionConst } from 'react-native-router-flux';
import { api } from '../../lib/Api';
import { getToken } from '../auth/authActions';
// import store from 'react-native-simple-store'
const {
  PROPOSAL_REQUEST,
  PROPOSAL_SUCCESS,
  PROPOSAL_FAILURE,
  CREATE_PROPOSAL_REQUEST,
  CREATE_PROPOSAL_SUCCESS,
  CREATE_PROPOSAL_FAILURE,
  VOTE_REQUEST,
  VOTE_SUCCESS,
  VOTE_FAILURE,
  FILTER_PROPOSAL,
  CHANGE_PROPOSAL_ID,
} = require('../../lib/constants').default;

/*############## Get Proposals Section ##############*/
export function getProposals() {
  return dispatch => {
    dispatch(proposalsRequest());
    return getToken()
    .then((token) => {
      return api.getProposals(token)
      .then((json) => {
        dispatch(proposalsSuccess(json));
      })
      .catch((error) => {
        if (error === 'unauth') {
          // TODO LOG OUT, REMOVE TOKEN
          Actions.login({ type: ActionConst.REFRESH });
        }
        dispatch(proposalsFailure(error));
      });
    })
    .catch((error) => {
      dispatch(proposalsFailure(error));
      Actions.login({ type: ActionConst.REFRESH });
    });
  };
}

export function proposalsRequest() {
  return {
    type: PROPOSAL_REQUEST
  };
}

export function proposalsSuccess(json) {
  return {
    type: PROPOSAL_SUCCESS,
    payload: json
  };
}

export function proposalsFailure(error) {
  return {
    type: PROPOSAL_FAILURE,
    payload: error
  };
}

/*############## Create Proposal Section ##############*/
export function createProposal(categoryId, title, desc, deadline) {
  return dispatch => {
    dispatch(createProposalRequest());
    return getToken()
    .then((token) => {
      return api.createProposals(token, categoryId, title, desc, deadline)
      .then((json) => {
        dispatch(createProposalSuccess(json));
      })
      .catch((error) => {
        if (error === 'unauth') {
          // TODO LOG OUT, REMOVE TOKEN
          Actions.login({ type: ActionConst.REFRESH });
        }
        dispatch(proposalsFailure(error));
      });
    })
    .catch((error) => {
      dispatch(createProposalFailure(error));
    });
  };
}

export function createProposalRequest() {
  return {
    type: CREATE_PROPOSAL_REQUEST
  };
}

export function createProposalSuccess(json) {
  return {
    type: CREATE_PROPOSAL_SUCCESS,
    payload: json
  };
}

export function createProposalFailure(error) {
  return {
    type: CREATE_PROPOSAL_FAILURE,
    payload: error
  };
}

/*############## Filter Proposal Section ##############*/
export function filterProposals(selected) {
  return {
    type: FILTER_PROPOSAL,
    payload: selected
  };
}

export function changeProposals(id) {
  return {
    type: CHANGE_PROPOSAL_ID,
    payload: id
  };
}
/*############## Vote Proposal Section ##############*/
/* @param id = id of the proposal and is different
   @param rowId = id of the row selected.
*/
export function votedProposal(id, voted, rowId) {
  console.log(id);
  console.log(voted);
  return dispatch => {
    dispatch(voteRequest());
    dispatch(voteSuccess(rowId));

    // return getToken()
    // .then((token) => {
    //   return api.votedProposal(token, id, voted)
    //   .then(() => {
    //     dispatch(voteSuccess(rowId));
    //   })
    //   .catch((error) => {
    //     if (error === 'unauth') {
    //       // TODO LOG OUT, REMOVE TOKEN
    //       Actions.login({ type: ActionConst.REFRESH });
    //     }
    //     dispatch(voteFailure(error));
    //   });
    // })
    // .catch((error) => {
    //   dispatch(voteFailure(error));
    // });
  };
}
export function voteRequest() {
  return {
    type: VOTE_REQUEST
  };
}

export function voteSuccess(rowId) {
  return {
    type: VOTE_SUCCESS,
    payload: rowId
  };
}

export function voteFailure(error) {
  return {
    type: VOTE_FAILURE,
    payload: error
  };
}
