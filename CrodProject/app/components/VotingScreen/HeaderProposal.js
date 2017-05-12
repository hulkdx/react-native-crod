import React, { Component } from 'react';
import {StyleSheet,Text,Image,Dimensions} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as proposalsActions from '../../reducers/proposals/proposalsActions'

const backgroundImage = require("../../../img/backgroundvotingup.jpg")

class Proposal extends Component {

  render() {
    return (
      <Image style={styles.container} source={backgroundImage}>
        <Text style={styles.title}>
          {this.props.proposals.proposals[this.props.proposalId].title}
        </Text>

      </Image>

    )
  }

}

const styles = StyleSheet.create({
  container:{
    width: null, height:Dimensions.get('window').height/5 ,
     justifyContent: 'center'
  },
  title:{
    marginLeft: 10,
    marginTop: 40,
    fontSize: 15,
    fontWeight:'bold',
    fontSize: 19,
  },
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
