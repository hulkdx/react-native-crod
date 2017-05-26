/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Reducers
*/
'use strict';

const {
  GET_DISCUSSION_REQUEST,
  GET_DISCUSSION_SUCCESS,
  GET_DISCUSSION_FAILURE,
} = require('../../lib/constants').default;
// Get the initial state
const InitialState = require('./initialState').default;

const initialState = new InitialState();

export default function categoryReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case GET_DISCUSSION_REQUEST: {
     return state.set('isFetching', true)
     .set('error', null)
     .set('discussion', []);
    }

    case GET_DISCUSSION_SUCCESS:
     return state.set('isFetching', false)
     .set('discussion', action.payload)
     .set('updated', true);

    case GET_DISCUSSION_FAILURE:
     return state.set('isFetching', false)
     .set('error', 'error');

    default:
      break;
  }

  // Default State
  return state;
}
