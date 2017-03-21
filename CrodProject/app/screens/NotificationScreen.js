import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
import FooterBar from '../components/FooterBar.js'
import NotificationBody from '../components/NotificationScreen/NotificationBody.js'

class NotificationScreen extends Component {



  render() {
    return (
      <ViewContainer>

        <NotificationBody />
        <FooterBar notificationScreen={true}/>
      </ViewContainer>

    )
  }

}

const styles = StyleSheet.create({

});

module.exports = NotificationScreen
