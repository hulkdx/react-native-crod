import React, { Component } from 'react';
import {StyleSheet,Image,View} from 'react-native';
import categories from "../../data-manager/categories.js"
import _ from 'underscore'


class CategoryHeader extends Component {


  render() {

    return (
        <View style={styles.categoryHeader}>
        {/*Initial value of categoryId is undefined.
           Condition: only for defined categoryId props,
           the corrensponding image from categories[] will
           be assigned to the source of the Image component*/}
        <Image style={styles.icon} source={!_.isUndefined(this.props.categoryId) ? categories[this.props.categoryId].image : {}}  />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  icon:{
    tintColor: 'white',
    margin: 10
  },
  categoryHeader:{

    flexDirection: 'row',
    backgroundColor: '#88B3D9',
   justifyContent: 'center',

  }
});


module.exports = CategoryHeader
