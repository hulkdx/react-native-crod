/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Reducers
*/
'use strict';
// import { getToken } from '../proposals/proposalsActions';

const {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  CHANGE_SELECT_CATEGORY,
} = require('../../lib/constants').default;
// Get the initial state
const InitialState = require('./initialState').default;

const initialState = new InitialState();

export default function categoryReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case GET_CATEGORY_REQUEST: {
     return state.set('isFetching', true)
     .set('error', null);
    }

    case GET_CATEGORY_SUCCESS:
     return state.set('isFetching', false)
     .set('selected', action.payload.map((row) => {
       return {
         id: row.id,
         selected: false
       };
     }))
     .set('category', action.payload);

    case GET_CATEGORY_FAILURE:
     return state.set('isFetching', false)
     .set('error', 'error');

    case CHANGE_SELECT_CATEGORY:
     state.getIn(['selected'])[action.payload].selected = !state.getIn(['selected'])[action.payload].selected;
     return state;

    default:
      break;
  }

  // Default State
  return state;
}
