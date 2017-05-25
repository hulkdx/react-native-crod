/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Header
*/
'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as authActions from '../../reducers/auth/authActions';

class ProfileHeader extends Component {

  componentWillMount() {
    this.props.updateProfile();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.pencilContainer}>
        <Icon name="pencil" style={styles.pencilIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutContainer} onPress={this._onClickLogout}>
        <Text style={styles.profileText}>Logout</Text>
        </TouchableOpacity>

        <Image style={styles.profileImage} source={{ uri: this.props.auth.profilePicUrl }} />
        <Text style={[styles.profileText, styles.profileName]}>{this.props.auth.firstName} {this.props.auth.lastName}</Text>
        <Text style={styles.profileText}>{this.props.auth.email}</Text>
      </View>
    );
  }

  _onClickLogout = () => {
    this.props.logout();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3.5,
    paddingBottom: 5,
    paddingTop: 20,
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(44, 184, 214)'
  },
  profileImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  profileText: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'transparent',
  },
  profileName: {
    fontSize: 25
  },
  pencilContainer: {
    position: 'absolute',
    left: Dimensions.get('window').width - 20,
    top: 10,
    backgroundColor: 'transparent',
  },
  pencilIcon: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  logoutContainer: {
    position: 'absolute',
    left: 10,
    top: 10,
    backgroundColor: 'transparent',
  }
});
// Redux boilerplate
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(authActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
