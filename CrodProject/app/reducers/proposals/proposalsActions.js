/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Actions
*/
'use strict'
// import { Actions, ActionConst } from 'react-native-router-flux';
import { api } from '../../lib/Api'
// import store from 'react-native-simple-store'
const {
  PROPOSAL_REQUEST,
  PROPOSAL_SUCCESS,
  PROPOSAL_FAILURE,
} = require('../../lib/constants').default


/*############## Proposals Section ##############*/
export function getProposals () {
  return dispatch => {
    dispatch(proposalsRequest ())
    return api.getProposals()

    .then(function (json) {
      dispatch(proposalsSuccess(json))
    })
    .catch((error) => {
      dispatch(proposalsFailure(error))
    })
  }
}

export function proposalsRequest () {
  return {
    type: PROPOSAL_REQUEST
  }
}

export function proposalsSuccess (json) {
  return {
    type: PROPOSAL_SUCCESS,
    payload: json
  }
}

export function proposalsFailure (error) {
  return {
    type: PROPOSAL_FAILURE,
    payload: error
  }
}
