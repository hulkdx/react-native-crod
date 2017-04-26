'use strict'

import _ from 'underscore'
const API_BASE_URL = 'https://mysterious-cliffs-27258.herokuapp.com/'

/**
 * Api Class uses in actions (eg. authActions)
 */
export default class Api {
  /**
   * ### login
   * POST data and retrieve JSON/error
   *
   * @param username, password
   *
   * @returns
   * TODO
   */
  async login (username, password) {
    const ENDPOINT = 'api/login'
    return await fetch(API_BASE_URL+ENDPOINT, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then((res) => {
        return res.json()
      .then((json) => {
          if (res.status === 200 || res.status === 201) {
            return json
          } else {
            throw (json)
          }
        })
      })
      .catch((error) => {
        throw (error)
      })
  }

  async register (username, email, email2, password) {
    const ENDPOINT = 'api/register'
    return await fetch(API_BASE_URL+ENDPOINT, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          username: username,
          email: email,
          email2: email2,
          password: password
        })
      })
      .then((res) => {
        return res.json()
      .then((json) => {
          if (res.status === 200 || res.status === 201) {
            return json
          } else {
            throw (json)
          }
        })
      })
      .catch((error) => {
        throw (error)
      })
  }
}
// The singleton variable
export let api = new Api()
