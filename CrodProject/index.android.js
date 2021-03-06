/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Root of Android
*/
import React, { Component } from 'react';
import { AppRegistry, Image, StyleSheet } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import configureStore from './app/lib/configureStore';

// Screens
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import HomeScreen from './app/screens/HomeScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import NotificationScreen from './app/screens/NotificationScreen';
import VotingScreen from './app/screens/VotingScreen';
import App from './app/screens/App';

// Icons
const HomeScreenIcon = require('./img/home-icon.png');
const VotingScreenIcon = require('./img/deadline-voting-icon.png');
const ProfileScreenIcon = require('./img/profile-icon.png');
const NotificationScreenIcon = require('./img/notification-icon-updated.png');
/*
 * Displays the icon for the tab w/ color dependent upon selection
*/
const TabIcon = ({ selected, source }) => {
  return (
    <Image style={[styles.icon, { tintColor: selected ? '#5d95c4' : '#dad9de' }]} source={source} />
  );
};

// This will modify the margin for the TabBar
const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
  };
  if (computedProps.isActive) {
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};


class CrodProject extends Component {

  render() {
    const store = configureStore({});
    return (
      <Provider store={store}>
      <Router getSceneStyle={getSceneStyle}>
        <Scene key='root' hideNavBar hideTabBar>
          <Scene key="footerTab" tabs hideNavBar tabBarStyle={styles.customizeFooter} >
                 <Scene key="App" initial>
                        <Scene key='app' component={App} hideNavBar hideTabBar />
                 </Scene>

                 <Scene key="homeTab" source={HomeScreenIcon} icon={TabIcon}
                        onPress={() => { Actions.home({ type: ActionConst.REFRESH }); }}
                 >
                        <Scene key='home' component={HomeScreen} hideNavBar />
                 </Scene>

                 {/* When you clicked on tab bar goes to last proposal */}
                 <Scene key="votingTab" source={VotingScreenIcon} icon={TabIcon}
                        onPress={() => { Actions.voteNow({ type: ActionConst.REFRESH, proposalId: -1 }); }}
                 >
                        <Scene key='voteNow' component={VotingScreen} hideNavBar />
                 </Scene>

                 <Scene key="profileTab" source={ProfileScreenIcon} icon={TabIcon}
                        onPress={() => { Actions.profile({ type: ActionConst.REFRESH }); }}
                 >
                        <Scene key='profile' component={ProfileScreen} hideNavBar />
                </Scene>

                 <Scene key="notificationTab" source={NotificationScreenIcon} icon={TabIcon}
                        onPress={() => { Actions.notification({ type: ActionConst.REFRESH }); }}
                 >
                        <Scene key='notification' component={NotificationScreen} hideNavBar />
                </Scene>

                {/* When you clicked on proposal */}
                <Scene key="votingNonClicked">
                  <Scene key='voting' component={VotingScreen} hideNavBar />
                </Scene>

                <Scene key="loginContainer" >
                       <Scene key='login' component={LoginScreen} hideNavBar hideTabBar />
                </Scene>

                <Scene key="registerContainer" >
                       <Scene key='register' component={RegisterScreen} hideNavBar hideTabBar />
                </Scene>
          </Scene>

        </Scene>


      </Router>
      </Provider>
    );
  }

}
const styles = StyleSheet.create({

  customizeFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#5d95c4',

  },
  icon: {
    height: 22.5,
    width: 22.5,
    resizeMode: 'contain'
  }
  });


AppRegistry.registerComponent('CrodProject', () => CrodProject);
