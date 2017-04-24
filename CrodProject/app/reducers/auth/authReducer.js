/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Reducers
*/
'use strict'
import _ from 'underscore'

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
        .set('error', validateLoginError(action.payload))

  }

  // Default State
  return state
}

function validateLoginError(payload){
  var error = '';
  if (!_.isUndefined(payload.username))
    error += 'Username: ' + payload.username
  if (!_.isUndefined(payload.password))
    error += 'Password: ' + payload.password
  if (!_.isUndefined(payload.error))
    error += payload.error
  return error
}
