'use strict'
import React, { Component } from 'react';
import {StyleSheet,Text, Image,View} from 'react-native';

const backgroundImage = require("../../../img/backgroundvotingup.jpg")

class Articles extends Component {

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text >
          Articles
        </Text>

      </View>

    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});

module.exports = Articles
