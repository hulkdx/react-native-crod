/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Login Screen
  TODO: Register Screen
*/
'use strict';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import ViewContainer from '../components/ViewContainer.js';

// Actions
import * as authActions from '../reducers/auth/authActions';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      email2: '',
      password: '',
     };
  }

  render() {
    return (
      <ViewContainer style={styles.container}>

      <Text style={styles.errorHandle}>
        {this.props.auth.isFetching ? 'Loading...'
          : this.props.auth.error}
      </Text>

        <TextInput
          placeholder="username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
          onChangeText={(username) => this.setState({ username })}
          style={styles.input}
        />

        <TextInput
          placeholder="email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
          onChangeText={(email) => this.setState({ email })}
          style={styles.input}
        />

        <TextInput
          placeholder="confirm email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
          onChangeText={(email2) => this.setState({ email2 })}
          style={styles.input}
        />

        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
          style={styles.password}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={this._onPressRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={this._onPressBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </ViewContainer>
    );
  }

  _onPressBack = () => {
    Actions.login({ type: ActionConst.REFRESH });
  }

  _onPressRegister = () => {
    this.props.register(this.state.username, this.state.email, this.state.email2, this.state.password);
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#024287',
    justifyContent: 'center'
  },
  input: {
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 8,
  },
  password: {
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 8,
  },
  buttonContainer: {
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    marginBottom: 10,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#024287'
  },
  loginText: {
    color: 'white',
    alignSelf: 'center'
  },
  errorHandle: {
    height: 25,
    color: 'red',
    alignSelf: 'center'
  }
});

// Redux boilerplate
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(authActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
