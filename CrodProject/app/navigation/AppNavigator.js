'use strict'
import React, { Component } from 'react';
import {Navigator, StyleSheet, Text} from 'react-native';
import LauncherScreen from '../screens/LauncherScreen';

class AppNavigator  extends Component {

  _renderScreen(route, navigator) {
    var globalNavigatorProps = {
      navigator
    }

    switch (route.ident) {
      case "LauncherScreen":
        return (
          <LauncherScreen {...globalNavigatorProps} />
        )
      default:
        return (
          <Text>{'you messed up something ${route}'}</Text>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScreen} />
    )
  }
}

const styles = StyleSheet.create({
  navigatorStyles: {

  }
});

module.exports = AppNavigator
