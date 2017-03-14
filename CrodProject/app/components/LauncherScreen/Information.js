import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import ViewContainer from '../ViewContainer.js'
import CircleSwipe from '../CircleSwipe.js'


class Information extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ViewContainer style={styles.container}>

      <View style={{flex: 1, justifyContent: 'center'}}>

        <Text>
          Informations
        </Text>

      </View>

      <CircleSwipe pageNumber={2} />


      </ViewContainer>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#024287',
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
    marginBottom: 10,
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#024287'
  },
  loginText: {
    color: 'white',
    alignSelf: "center"
  },
});

module.exports = Information
