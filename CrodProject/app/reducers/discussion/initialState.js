/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  InitialState
*/
'use strict';

const { Record } = require('immutable');

const InitialState = Record({
  error: null,
  isFetching: false,
  discussion: [],
  updated: false,
});

export default InitialState;
