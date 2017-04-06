import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const attachmentSource = require("../../../img/attachment.png")
const commentSource = require("../../../img/comment.png")

class ProposalTitle extends Component {

  render() {
    return (
      <View style={styles.titleRoot}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {this.props.text}
        </Text>
      </View>

        <View style={styles.bottomContainer}>

        {this.props.emoji &&
        <View>
          <Icon name='hand-o-up' size={22} color="#7FE57F"/>
          <Icon name='hand-o-down' size={22} color="#ff7f7f"/>
        </View>
        }

        {
          this.props.category &&
          <Image style={styles.category} source={this.props.category}/>
        }

        <View style={styles.extraIcons}>
          <Text>6</Text>
          <Image style={styles.category} source={attachmentSource}/>
          <Text>3</Text>
          <Image style={styles.category} source={commentSource}/>
        </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleRoot: {
    flex: 3,
    // marginTop: -15, THIS SHOULD BE REMOVED
    backgroundColor: 'white',
    // paddingTop: 30,
    // paddingBottom: 30,
    // paddingLeft: 15,
    // paddingRight: 15,
    borderColor: '#2575BB',
    borderWidth: 0.2,
    borderRadius: 10,
  },
  titleContainer:{
    flex:1,
    justifyContent:'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'sans-serif',
  },
  bottomContainer: {
    flexDirection: 'row',
    height: 20,
    marginLeft: 5,
    marginBottom: 5,
  },
  category: {
    width: 20,
    height: null,
    resizeMode: 'contain',
  },
  extraIcons: {
    flex: 1,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

module.exports = ProposalTitle
