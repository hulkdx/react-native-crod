'use strict'
import {api} from '../../lib/Api'
const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} = require('../../lib/constants').default


/*############## Login section ##############*/
export function login (username, password) {
  return dispatch => {
    dispatch(loginRequest())
    return api.login(username, password)

    .then(function (json) {
      console.log(json);
      // TODO return saveToken(json)
        // .then(function () {
          dispatch(loginSuccess(json))
          // navigate to Home
          // Actions.Tabbar()
          // dispatch(logoutState())
        // })
    })
    .catch((error) => {
      dispatch(loginFailure(error))
    })
  }
}

export function loginRequest () {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess (json) {
  return {
    type: LOGIN_SUCCESS,
    payload: json
  }
}

export function loginFailure (error) {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}
