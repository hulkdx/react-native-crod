import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
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

const styles = StyleSheet.create({

});

module.exports = NotificationScreen
