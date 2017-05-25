/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  InitialState
*/
'use strict';

const { Record } = require('immutable');

const InitialState = Record({
  error: null,
  isFetching: false,
  firstName: 'Michele',
  lastName: 'Paoletti',
  email: '',
  profilePicUrl: ''
});

export default InitialState;
