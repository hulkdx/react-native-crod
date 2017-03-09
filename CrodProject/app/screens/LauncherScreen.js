import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity, TextInput, Image} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
import Icon from 'react-native-vector-icons/FontAwesome'


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
      <ViewContainer style={styles.container}>

      <TextInput
        placeholder="username"
        placeholderTextColor="rgba(255,255,255,0.7)"
        underlineColorAndroid="transparent"
        style={styles.input}/>
      <TextInput
        placeholder="password"
        placeholderTextColor="rgba(255,255,255,0.7)"
        underlineColorAndroid="transparent"
        style={styles.password}/>

      <View style={styles.viewContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>Already a member</Text>
      </View>
      <View style={styles.circlesContent}>
      <Icon name="circle" style={styles.circles}>
      </Icon>
      </View>

      </ViewContainer>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#024287',
    justifyContent: 'center'
  },
  viewContainer: {
    alignItems: 'center'
  },
  input: {
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 8,
  },
  password: {
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 30
  },
  buttonContainer: {
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#024287'
  },
  loginText: {
    color: 'white'
  },
  circles: {
    color: "white",

  },
  circlesContent: {
    flex: 1,
      justifyContent: "flex-end"
  }
});

module.exports = LauncherScreen
