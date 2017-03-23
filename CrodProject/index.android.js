import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import LauncherScreen from './app/screens/LauncherScreen'
import HomeScreen from './app/screens/HomeScreen'
import ProfileScreen from './app/screens/ProfileScreen'
import NotificationScreen from './app/screens/NotificationScreen'
import CategoryScreen from './app/screens/CategoryScreen'
import {Router, Scene} from 'react-native-router-flux';

class CrodProject extends Component {

  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='home' component={HomeScreen} hideNavBar hideTabBar/>
          <Scene key='profile' component={ProfileScreen} hideNavBar hideTabBar/>
          <Scene key='notification' component={NotificationScreen} hideNavBar hideTabBar/>
          <Scene key='launcher' component={LauncherScreen} hideNavBar hideTabBar/>
          <Scene key='category' component={CategoryScreen} hideNavBar hideTabBar/>
        </Scene>
      </Router>
    )
  }

}

AppRegistry.registerComponent('CrodProject', () => CrodProject);
