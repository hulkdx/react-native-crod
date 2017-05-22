/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Login Screen
*/
'use strict';
import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import Initial from '../components/LoginScreen/Initial';
import Information from '../components/LoginScreen/Information';
import Login from '../components/LoginScreen/Login';


class LoginScreen extends Component {
  render() {
    return (
      <Swiper loop={false} autoplay showsPagination={false} autoplayTimeout={5} >
        <Initial />
        <Information />
        <Login />
      </Swiper>
    );
  }
}

module.exports = LoginScreen;
