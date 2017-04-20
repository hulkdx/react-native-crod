'use strict'

const {Record} = require('immutable')

var InitialState = Record({
  error: null,
  isFetching: false,
})

export default InitialState
