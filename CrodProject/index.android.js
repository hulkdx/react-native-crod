import React, { Component } from 'react';
import {AppRegistry,Image,StyleSheet} from 'react-native';
import LauncherScreen from './app/screens/LauncherScreen'
import HomeScreen from './app/screens/HomeScreen'
import ProfileScreen from './app/screens/ProfileScreen'
import NotificationScreen from './app/screens/NotificationScreen'
import VotingScreen from './app/screens/VotingScreen'
import {Router, Scene, Actions, ActionConst} from 'react-native-router-flux';

const TabIcon = ({ selected, source }) => {
  return (
    <Image style={[styles.icon, {tintColor: selected ? 'rgba(0, 0, 0, 0.5)' :'white'}]} source={source}/>
  );
}

// define this based on the styles/dimensions you use
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
    return (
      <Router  getSceneStyle={getSceneStyle}>
        <Scene key='root' hideNavBar hideTabBar>
          <Scene key="footerTab"
                 tabs={true}
                 hideNavBar
                 tabBarStyle={styles.customizeFooter}>
                 <Scene key="homeTab" source={require('./img/home-icon.png')}
                        icon={TabIcon} onPress={()=> {Actions.home({type: ActionConst.REFRESH})}} initial >
                        <Scene key='home' component={HomeScreen} hideNavBar/>
                 </Scene>

                 {/* When you clicked on tab bar goes to last proposal */}
                 <Scene key="votingTab" source={require('./img/deadline-voting-icon.png')}
                        icon={TabIcon} onPress={()=> {Actions.voteNow({type: ActionConst.REFRESH, proposalId: 0}) }}>
                        <Scene key='voteNow' component={VotingScreen} hideNavBar/>
                        </Scene>

                 <Scene key="profileTab" source={require('./img/profile-icon.png')}
                        icon={TabIcon} onPress={()=> {Actions.profile({type: ActionConst.REFRESH}) }}  >
                        <Scene key='profile' component={ProfileScreen} hideNavBar/>
                </Scene>

                 <Scene key="notificationTab" source={require('./img/notification-icon-updated.png')}
                        icon={TabIcon} onPress={()=> {Actions.notification({type: ActionConst.REFRESH}) }}>
                        <Scene key='notification' component={NotificationScreen} hideNavBar />
                </Scene>
                
                {/* When you clicked on proposal */}
                <Scene key="votingNonClicked">
                  <Scene key='voting' component={VotingScreen} hideNavBar/>
                </Scene>
          </Scene>

        </Scene>


      </Router>
    )
  }

}
const styles = StyleSheet.create({

  customizeFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#88B3D9',
  },
  icon:{
    height: 25,
    width: 25,
    resizeMode: 'contain'
  }
  });


AppRegistry.registerComponent('CrodProject', () => CrodProject);
