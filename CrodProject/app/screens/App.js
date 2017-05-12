/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Decide if it goes to LoginScreen or HomeScreen
*/

'use strict'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { View } from 'react-native';

// Actions
import * as authActions from '../reducers/auth/authActions'


class Login extends Component {
  constructor(props) {
    super(props)
    // This function redirects to proper screen
    this.props.redirect()
  }

  render() {
    // TODO show Loading Screen here
    return (
      <View>

      </View>
    )
  }

}

// Redux boilerplate
function mapStateToProps (state) {
  return {
    auth: state.auth,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(authActions, dispatch)
}
export default connect(mapStateToProps , mapDispatchToProps)(Login);
