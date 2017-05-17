/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Categories listed in SideMenu
*/
'use strict';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as categoryActions from '../../reducers/categories/categoryActions';

class CategoryMenu extends Component {

  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.categories}>
      {this.renderCategoryImages()}
      </ScrollView>
    );
  }

  renderCategoryImages() {
    const rows = [];
    for (let i = 0; i < this.props.category.length; i++) {
      rows.push(
        <TouchableOpacity key={i} onPress={this._onClickCategoryImage.bind(this, i)} style={[styles.categoryDropDown, { borderRightWidth: this.props.category[i].selected ? 2 : 0 }]}>
          {this.props.category[i].selected ?
            <Image source={{ uri: this.props.category[i].source_fill }} style={styles.categoriesLeftSide} /> :
            <Image source={{ uri: this.props.category[i].source }} style={styles.categoriesLeftSide} />
          }
            <Text style={styles.categoryNameTxt}> {this.props.category[i].name} </Text>
        </TouchableOpacity>
      );
    }
    return (
      <View>
        {rows}
      </View>
    );
  }

  _onClickCategoryImage = (id) => {
    //Toggle property: when clicked from false => true && true => false
    this.props.changeSelectedCategory(id);
    this.forceUpdate();
  }

}


const styles = StyleSheet.create({
  rowProposalRoot: {
    flexDirection: 'row',
  },
  categories: {
    flexDirection: 'column',
  },
  categoryDropDown: {
    paddingTop: 5,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ffeb3b',
    borderRightWidth: 2

  },
  categoriesLeftSide: {
    tintColor: '#ffeb3b',
    height: 50,
    width: 50,
    resizeMode: 'contain',

  },
  categoryNameTxt: {
    marginTop: 5,
    color: '#ffeb3b',
    fontSize: 15,
    fontFamily: 'sans-serif-condensed'
  }
});

// Redux boilerplate
function mapStateToProps(state) {
  return {
    category: state.category.category,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(categoryActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryMenu);
// module.exports = CategoryMenu
