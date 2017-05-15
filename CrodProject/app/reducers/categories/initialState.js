/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  InitialState
*/
'use strict'

const {Record} = require('immutable')

var InitialState = Record({
  error: null,
  isFetching: false,
  proposals: []
})

export default InitialState
