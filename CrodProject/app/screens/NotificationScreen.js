/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Show the Notifications
*/
'use strict'
import React, { Component } from 'react';
import ViewContainer from '../components/ViewContainer.js'
import NotificationBody from '../components/NotificationScreen/NotificationBody.js'

class NotificationScreen extends Component {



  render() {
    return (
      <ViewContainer>

        <NotificationBody />

      </ViewContainer>

    )
  }

}

module.exports = NotificationScreen
