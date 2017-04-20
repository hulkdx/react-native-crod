'use strict'
import { Actions, ActionConst } from 'react-native-router-flux';
import { api } from '../../lib/Api'
import store from 'react-native-simple-store'
const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} = require('../../lib/constants').default


/*############## Login Section ##############*/
export function login (username, password) {
  return dispatch => {
    dispatch(loginRequest())
    return api.login(username, password)

    .then(function (json) {
      return saveToken(json.token)
        .then(function () {
          dispatch(loginSuccess(json))
          // navigate to Home
          Actions.home({type: ActionConst.REFRESH})
        })
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

/*############## Token Section ##############*/
export function saveToken (token) {
   return store.save('TOKEN_KEY', token)
}
export function getToken (token) {
  return dispatch => {
    return store.get('TOKEN_KEY')
      .then((token) => {
        if (token) {
          //dispatch(sessionTokenRequestSuccess(token))
          Actions.home({type: ActionConst.REFRESH})
        } else {
          //dispatch(sessionTokenRequestFailure())
          Actions.login({type: ActionConst.REFRESH})
        }
      })
      .catch((error) => {
        //dispatch(sessionTokenRequestFailure(error))
        Actions.login({type: ActionConst.REFRESH})
      })
  }
}
