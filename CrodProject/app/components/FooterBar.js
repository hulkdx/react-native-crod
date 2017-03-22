import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
import {Actions} from 'react-native-router-flux';




class Footer extends Component {

  render() {
    return (
      <View style={styles.customizeFooter}>

        <TouchableOpacity style={styles.positioningFooterIcons}>
        <Image style={styles.icon} source={require('../../img/back-icon.png')}/>
        </TouchableOpacity>

        <Image style={[styles.icon, styles.verticalBar]} source={require('../../img/verticalBar-icon.png')}/>

        <TouchableOpacity style={styles.positioningFooterIcons} onPress={()=>Actions.home()}>
        <Image style={[styles.icon, this.props.homeScreen ? {tintColor:'#1fbff1'} : {}]}
        source={require('../../img/home-icon.png')}/>
        </TouchableOpacity>

        <Image style={[styles.icon, styles.verticalBar]} source={require('../../img/verticalBar-icon.png')}/>

        <TouchableOpacity style={styles.positioningFooterIcons} onPress={()=>Actions.profile()}>
        <Image style={[styles.icon, this.props.profileScreen ? {tintColor:'#1fbff1'} : {}]}
        source={require('../../img/profile-icon.png')}/>
        </TouchableOpacity>

        <Image style={[styles.icon, styles.verticalBar]} source={require('../../img/verticalBar-icon.png')}/>

        <TouchableOpacity style={styles.positioningFooterIcons} onPress={()=>Actions.notification()}>
        <Image style={[styles.icon, this.props.notificationScreen ? {tintColor:'#1fbff1'} : {}]}
        source={require('../../img/notification-icon.png')}/>
        </TouchableOpacity>

      </View>


    )
  }

}

const styles = StyleSheet.create({

  customizeFooter: {

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4c5c4',
  },
  positioningFooterIcons: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon:{
    resizeMode: 'center'
  },
  verticalBar:{
    alignSelf: 'center'
  }
  });

module.exports = Footer
