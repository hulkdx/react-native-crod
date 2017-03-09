import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';

class CrodProject extends Component {

  render() {
    return (
      <AppNavigator
        initialRoute={{ident: "LauncherScreen"}}/>
    )
  }

}

AppRegistry.registerComponent('CrodProject', () => CrodProject);
