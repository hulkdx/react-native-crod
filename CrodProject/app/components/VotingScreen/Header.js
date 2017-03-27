import React, { Component } from 'react';
import {StyleSheet,Text, Image,View} from 'react-native';
import proposals from '../../data-manager/proposals'

const backgroundImage = require("../../../img/backgroundvotingup.jpg")

class Header extends Component {

  render() {
  console.log(this.props.colorChange)
    return (
      <Image style={styles.container} source={backgroundImage}>
        <Text style={{marginLeft: 10,fontSize: 15, fontWeight:'bold'}}>
          {proposals[this.props.proposalId].title}
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
