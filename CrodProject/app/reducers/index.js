/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Combine each reducers
*/
'use strict'

import { combineReducers } from 'redux'
import auth from './auth/authReducer'

/**
 * ## CombineReducers
 *
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */
const rootReducer = combineReducers({
  auth,
})

export default rootReducer
