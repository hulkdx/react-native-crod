import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,TouchableOpacity, ListView} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
//import Icons from 'react-native-vector-icons/FontAwesome'


class LauncherScreen extends Component {
  constructor(props) {
    super(props)
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //   dataSource: ds.cloneWithRows(people),
    // };
  }

  render() {
    return (
      <ViewContainer>
        <Text>
          LauncherScreen
        </Text>
      </ViewContainer>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  }

});

module.exports = LauncherScreen
