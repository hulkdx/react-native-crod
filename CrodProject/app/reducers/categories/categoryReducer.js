/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Reducers
*/
'use strict'
import _ from 'underscore'

const {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
} = require('../../lib/constants').default

// Get the initial state
const InitialState = require('./initialState').default
const initialState = new InitialState()

export default function categoryReducer (state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  switch (action.type) {
    case GET_CATEGORY_REQUEST: {
     return state.set('isFetching', true)
     .set('error', null)
    }

    case GET_CATEGORY_SUCCESS:
     return state.set('isFetching', false)
     .set('category', action.payload)

    case GET_CATEGORY_FAILURE:
     return state.set('isFetching', false)
     .set('error', "error")

  }

  // Default State
  return state
}
