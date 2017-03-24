import React, { Component } from 'react';
import {StyleSheet,Text, Image,View} from 'react-native';

 const backgroundImage = require("../../../img/backgroundblu.jpg")

class Header extends Component {

  render() {
    console.log(this.props);
    return (
      <Image source={backgroundImage} style={styles.container}>
        <Text style={{marginLeft: 10,fontSize: 15, fontWeight:'bold'}}>
          {this.props.title}
        </Text>

      </Image>

    )
  }

}

const styles = StyleSheet.create({
  container:{
     flex: 1,
    width: null, height: null,
    justifyContent: 'center'
  }
});

module.exports = Header
