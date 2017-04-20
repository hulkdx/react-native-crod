'use strict'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { View } from 'react-native';

// Actions
import * as authActions from '../reducers/auth/authActions'


class Login extends Component {

  render() {
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
