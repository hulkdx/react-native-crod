'use strict'

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} = require('../../lib/constants').default

// Get the initial state
const InitialState = require('./initialState').default
const initialState = new InitialState()

export default function authReducer (state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state)

  switch (action.type) {

     case LOGIN_REQUEST: {
       return state.set('isFetching', true)
       .set('error', null)
     }

     case LOGIN_SUCCESS:
       return state.set('isFetching', false)

     case LOGIN_FAILURE:
       return state.set('isFetching', false)
       // TODO .set('error', action.payload)

  }

  // Default State
  return state
}
