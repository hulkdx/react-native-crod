/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Reducers
*/
'use strict';

const {
  PROPOSAL_REQUEST,
  PROPOSAL_SUCCESS,
  PROPOSAL_FAILURE,
  CREATE_PROPOSAL_REQUEST,
  CREATE_PROPOSAL_SUCCESS,
  CREATE_PROPOSAL_FAILURE,
  FILTER_PROPOSAL,
} = require('../../lib/constants').default;

// Get the initial state
const InitialState = require('./initialState').default;

const initialState = new InitialState();

export default function proposalsReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case PROPOSAL_REQUEST: {
     return state.set('isFetching', true)
     .set('proposalsUpdated', false)
     .set('error', null);
    }


    case PROPOSAL_SUCCESS:
     return state.set('isFetching', false)
     .set('proposals', action.payload)
     .set('proposalsUpdated', true);


    case CREATE_PROPOSAL_FAILURE:
    case PROPOSAL_FAILURE:
     return state.set('isFetching', false)
     .set('error', 'error');


    case CREATE_PROPOSAL_REQUEST:
     return state.set('isFetching', true)
     .set('isCreated', false)
     .set('error', null);

    case CREATE_PROPOSAL_SUCCESS:
     return state.set('isFetching', false)
     .set('isCreated', true)
     .set('proposals', [action.payload, ...state.get('proposals')]);

    case FILTER_PROPOSAL:
     return state.set('filteredProposals', filterProposal(state.get('proposals'), action.payload));

    default:
      break;
  }

  // Default State
  return state;
}

/* This function take list of proposals, and return the filterone based on the
   category selected.
   @param proposals: list of proposals
   @param selectedList: list of categories selected (@link categories/InitialState selected)
   @return filterProposal: list of filtered proposals
*/
function filterProposal(proposals, selectedList) {
  const filteredProposal = [];

  for (let i = 0, len = selectedList.length; i < len; i++) {
    if (selectedList[i].selected) {
      // search for the category in @param proposals
      for (let j = 0, len1 = proposals.length; j < len1; j++) {
        if (selectedList[i].id === proposals[j].category_id) {
          filteredProposal.push(proposals[j]);
        }
      }
    }
  }
  return filteredProposal;
}
