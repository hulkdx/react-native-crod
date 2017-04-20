'use strict'

/**
 * ## Imports
 *
 * redux functions
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

/**
* ## Reducer
* The reducer contains the 4 reducers from
* device, global, auth, profile
*/
import reducer from '../reducers'

/**
 * ## creatStoreWithMiddleware
 * Like the name...
 */
const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore)

export default function configureStore (initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}
