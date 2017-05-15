/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Actions
*/
'use strict'
import { Actions, ActionConst } from 'react-native-router-flux';
import { api } from '../../lib/Api'
import { getToken } from '../auth/authActions'
// import store from 'react-native-simple-store'
const {
  PROPOSAL_REQUEST,
  PROPOSAL_SUCCESS,
  PROPOSAL_FAILURE,
  CREATE_PROPOSAL_REQUEST,
  CREATE_PROPOSAL_SUCCESS,
  CREATE_PROPOSAL_FAILURE,
} = require('../../lib/constants').default

/*############## Get Proposals Section ##############*/
export function getProposals () {
  return dispatch => {
    dispatch(proposalsRequest ())
    return getToken()
    .then((token) => {
      return api.getProposals(token)
      .then(function (json) {
        dispatch(proposalsSuccess(json))
      })
      .catch((error) => {
        if (error === 'unauth') {
          // TODO LOG OUT, REMOVE TOKEN
          Actions.login({type: ActionConst.REFRESH})
        }
        dispatch(proposalsFailure(error))
      })
    })
    .catch((error) => {
      dispatch(proposalsFailure(error))
      Actions.login({type: ActionConst.REFRESH})
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

/*############## Create Proposal Section ##############*/
export function createProposal () {
  return dispatch => {
    dispatch(createProposalRequest())
  }
}

export function createProposalRequest() {
  return {
    type: CREATE_PROPOSAL_REQUEST
  }
}

export function createProposalSuccess (json) {
  return {
    type: CREATE_PROPOSAL_SUCCESS,
    payload: json
  }
}

export function createProposalFailure (error) {
  return {
    type: CREATE_PROPOSAL_FAILURE,
    payload: error
  }
}
