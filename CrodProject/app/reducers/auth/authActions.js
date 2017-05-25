/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Actions
*/
'use strict';
import { Actions, ActionConst } from 'react-native-router-flux';
import store from 'react-native-simple-store';
import { api } from '../../lib/Api';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  UPDATE_PROFILE,
} = require('../../lib/constants').default;


/*############## Login Section ##############*/
export function login(username, password) {
  return dispatch => {
    dispatch(loginRequest());
    return api.login(username, password)

    .then((json) => {
      return saveToken(json.token, json.first_name, json.last_name, json.email, json.profile_pic_url)
        .then(() => {
          dispatch(loginSuccess(json));
          // navigate to Home
          Actions.home({ type: ActionConst.REFRESH });
        });
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
  };
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export function loginSuccess(json) {
  return {
    type: LOGIN_SUCCESS,
    payload: json
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
}

/*############## Register Section ##############*/
export function register(username, email, email2, password) {
  return dispatch => {
    dispatch(registerRequest());
    return api.register(username, email, email2, password)

    .then((json) => {
          dispatch(registerSuccess(json));
          // navigate to login
          Actions.login({ type: ActionConst.REFRESH });
    })
    .catch((error) => {
      dispatch(registerFailure(error));
    });
  };
}

export function registerRequest() {
  return {
    type: SIGNUP_REQUEST
  };
}

export function registerSuccess(json) {
  return {
    type: SIGNUP_SUCCESS,
    payload: json
  };
}

export function registerFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    payload: error
  };
}

/*############## Logout Section ##############*/
export function logout() {
  return dispatch => {
    dispatch(logoutRequest());
    // TODO call an api for logout
    //return api.login(username, password)
    // .then((json) => {
      return removeToken()
        .then(() => {
          dispatch(logoutSuccess());
          // navigate to Home
          Actions.login({ type: ActionConst.REFRESH });
        })
    // })
    .catch((error) => {
      dispatch(logoutFailure(error));
    });
  };
}

export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  };
}

export function logoutSuccess(json) {
  return {
    type: LOGOUT_SUCCESS,
    payload: json
  };
}

export function logoutFailure(error) {
  return {
    type: LOGOUT_FAILURE,
    payload: error
  };
}
/*############## Token Section ##############*/
export function saveToken(token, firstName, lastName, email, profilePicUrl) {
  // Save information locally in chain way
  return store.save('TOKEN_KEY', token)
  .then(() => {
    store.save('firstName', firstName)
    .then(() => {
      store.save('lastName', lastName)
      .then(() => {
        store.save('email', email)
        .then(() => {
          store.save('profilePicUrl', profilePicUrl);
        });
      });
    });
  });
}

export function getToken() {
  return store.get('TOKEN_KEY');
}

export function removeToken() {
  return store.delete('TOKEN_KEY');
}

export function updateProfile() {
  return dispatch => {
    return store.get('firstName')
    .then((firstName) => {
      store.get('lastName')
      .then((lastName) => {
        store.get('email')
        .then((email) => {
          store.get('profilePicUrl')
          .then((profilePicUrl) => {
            dispatch(requestUpdateProfile(firstName, lastName, email, profilePicUrl));
          });
        });
      });
    });
  };
}

export function requestUpdateProfile(firstName, lastName, email, profilePicUrl) {
  return {
    type: UPDATE_PROFILE,
    payload: { firstName, lastName, email, profilePicUrl }
  };
}

export function redirect() {
  return () => {
    return getToken()
      .then((token) => {
        if (token) {
          //dispatch(sessionTokenRequestSuccess(token))
          Actions.home({ type: ActionConst.REFRESH });
        } else {
          //dispatch(sessionTokenRequestFailure())
          Actions.login({ type: ActionConst.REFRESH });
        }
      })
      .catch(() => {
        //dispatch(sessionTokenRequestFailure(error))
        Actions.login({ type: ActionConst.REFRESH });
      });
  };
}
