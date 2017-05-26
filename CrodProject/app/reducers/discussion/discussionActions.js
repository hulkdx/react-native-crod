/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Actions
*/
'use strict';
import { api } from '../../lib/Api';
import { getToken } from '../auth/authActions';
// import store from 'react-native-simple-store'
const {
  GET_DISCUSSION_REQUEST,
  GET_DISCUSSION_SUCCESS,
  GET_DISCUSSION_FAILURE,
} = require('../../lib/constants').default;

/*############## TODO Discussion Section ##############*/
export function getDiscussions(proposalId) {
  return dispatch => {
    dispatch(discussionRequest());
    return getToken()
    .then((token) => {
      api.getDiscussions(token, proposalId)
      .then((json) => {
        dispatch(discussionSuccess(json));
      })
      .catch((error) => {
        if (error === 'unauth') {
          // TODO LOG OUT, REMOVE TOKEN
          // Actions.login({type: ActionConst.REFRESH})
        }
        dispatch(discussionFailure(error));
      });
    })
    .catch((error) => {
      dispatch(discussionFailure(error));
      // Actions.login({type: ActionConst.REFRESH})
    });
  };
}

export function discussionRequest() {
  return {
    type: GET_DISCUSSION_REQUEST
  };
}

export function discussionSuccess(json) {
  return {
    type: GET_DISCUSSION_SUCCESS,
    payload: json
  };
}

export function discussionFailure(error) {
  return {
    type: GET_DISCUSSION_FAILURE,
    payload: error
  };
}
