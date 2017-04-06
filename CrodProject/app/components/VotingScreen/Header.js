import React, { Component } from 'react';
import {StyleSheet,Text,Image,Dimensions} from 'react-native';
import proposals from '../../data-manager/proposals'

const backgroundImage = require("../../../img/backgroundvotingup.jpg")

class Header extends Component {

  render() {
  // console.log(this.props.colorChange)
    return (
      <Image style={styles.container} source={backgroundImage}>
        <Text style={styles.title}>
          {proposals[this.props.proposalId].title}
        </Text>

      </Image>

    )
  }

}

var height = Dimensions.get('window').height; //full height
const styles = StyleSheet.create({
  container:{
    width: null, height:height/4.2 ,
     justifyContent: 'center'
  },
  title:{
    marginLeft: 10,
    marginTop: 40,
    fontSize: 15,
    fontWeight:'bold'
  },
});

module.exports = Header
