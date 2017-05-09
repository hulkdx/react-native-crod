/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Reducers
*/
'use strict'
import _ from 'underscore'

const {
  PROPOSAL_REQUEST,
  PROPOSAL_SUCCESS,
  PROPOSAL_FAILURE,
} = require('../../lib/constants').default

// Get the initial state
const InitialState = require('./initialState').default
const initialState = new InitialState()

export default function proposalsReducer (state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  switch (action.type) {
    case PROPOSAL_REQUEST: {
     return state.set('isFetching', true)
     .set('error', null)
    }

    case PROPOSAL_SUCCESS:
     return state.set('isFetching', false)
     .set('proposals', action.payload)


    case PROPOSAL_FAILURE:
     return state.set('isFetching', false)
     .set('error', "error")

  }

  // Default State
  return state
}
