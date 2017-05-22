/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Actions
*/
'use strict';
import { api } from '../../lib/Api';
import { getToken } from '../auth/authActions';
// import store from 'react-native-simple-store'
const {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  CHANGE_SELECT_CATEGORY
} = require('../../lib/constants').default;

/*############## Get category Section ##############*/
export function getCategories() {
  return dispatch => {
    dispatch(categoryRequest());
    return getToken()
    .then((token) => {
      api.getCategories(token)
      .then((json) => {
        dispatch(categorySuccess(json));
      })
      .catch((error) => {
        if (error === 'unauth') {
          // TODO LOG OUT, REMOVE TOKEN
          // Actions.login({type: ActionConst.REFRESH})
        }
        dispatch(categoryFailure(error));
      });
    })
    .catch((error) => {
      dispatch(categoryFailure(error));
      // Actions.login({type: ActionConst.REFRESH})
    });
  };
}

export function categoryRequest() {
  return {
    type: GET_CATEGORY_REQUEST
  };
}

export function categorySuccess(json) {
  return {
    type: GET_CATEGORY_SUCCESS,
    payload: json
  };
}

export function categoryFailure(error) {
  return {
    type: GET_CATEGORY_FAILURE,
    payload: error
  };
}

export function changeSelectedCategory(id) {
  return {
    type: CHANGE_SELECT_CATEGORY,
    payload: id
  };
}

/*############## TODO Create Category Section ##############*/
// export function createProposal () {
//   return dispatch => {
//     dispatch(createProposalRequest())
//   }
// }
//
// export function createProposalRequest() {
//   return {
//     type: CREATE_GET_CATEGORY_REQUEST
//   }
// }
//
// export function createcategoryuccess (json) {
//   return {
//     type: CREATE_GET_CATEGORY_SUCCESS,
//     payload: json
//   }
// }
//
// export function createProposalFailure (error) {
//   return {
//     type: CREATE_GET_CATEGORY_FAILURE,
//     payload: error
//   }
// }
