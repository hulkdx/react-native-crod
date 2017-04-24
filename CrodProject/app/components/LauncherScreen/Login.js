/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Login Screen
*/
'use strict'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity, TextInput} from 'react-native';

// Actions
import * as authActions from '../../reducers/auth/authActions'

import ViewContainer from '../ViewContainer.js'
import CircleSwipe from '../CircleSwipe.js'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
     };
  }


  render() {
    return (
      <ViewContainer style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>

        <Text style={styles.errorHandle}>
          {this.props.auth.isFetching ? 'Loading...'
            : this.props.auth.error}
        </Text>

        <TextInput
          placeholder="username"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
          onChangeText={(username) => this.setState({username})}
          style={styles.input}/>
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          style={styles.password}/>

        <TouchableOpacity style={styles.buttonContainer} onPress={this._onPressLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Already a member</Text>
        </TouchableOpacity>

      </View>

      <CircleSwipe pageNumber={3} />
      </ViewContainer>
    )
  }

  _onPressLogin = () => {
    this.props.login(this.state.username, this.state.password);
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#024287',
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
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#024287'
  },
  loginText: {
    color: 'white',
    alignSelf: "center"
  },
  errorHandle: {
    height: 25,
    color: 'red',
    alignSelf: 'center'
  }
});

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
