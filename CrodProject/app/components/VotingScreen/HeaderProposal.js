import React, { Component } from 'react';
import { StyleSheet,Text,Image,Dimensions,View,TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as proposalsActions from '../../reducers/proposals/proposalsActions'
import Icon from 'react-native-vector-icons/FontAwesome'

const backgroundImage = require("../../../img/backgroundvotingup.jpg")
const test = require("../../../img/categories/environment.png")

class Proposal extends Component {
  render() {
    return (
      <Image style={styles.container} source={backgroundImage}>

      <View style={styles.centerContainer}>
        <TouchableOpacity>
          <Icon style={styles.arrow} name="arrow-left" size={35} />
        </TouchableOpacity>

        <Text style={styles.title}>{this.props.proposals.proposals[this.props.proposalId].title}</Text>

        <TouchableOpacity>
          <Icon style={styles.arrow} name="arrow-right" size={35} />
        </TouchableOpacity>
      </View>

      </Image>

    )
  }

}
const styles = StyleSheet.create({
  container:{
    width: null,
    height: Dimensions.get('window').height/4,
  },
  centerContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title:{
    flex:1,
    fontWeight:'bold',
    fontSize: 19,
    marginLeft: 10,
    marginRight: 10,
  },
  arrow:{
    color: 'rgba(255, 255, 255, 0.6)',
    marginLeft: 10,
    marginRight: 10,

  }
});

// Redux boilerplate
function mapStateToProps (state) {
  return {
    proposals: state.proposals,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(proposalsActions, dispatch)
}
export default connect(mapStateToProps , mapDispatchToProps)(Proposal);
