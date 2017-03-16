'use strict'
import _ from 'underscore'

export default class Service {

  setToken (token) {
    if (!_.isNull(token)) {
      throw new Error('TokenMissing')
    }
  }

  // Oview API login
  async postLogin(email, password) {
    email="test11@test.com"
    password="123456"
    return await fetch('https://api.oviewapp.com/v1/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      })
      .then((res) => {
        return res.json()
      .then(function (json) {
          if (res.status === 200 || res.status === 201) {
            console.log(json.data.accessToken);
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
export let api = new Service()
