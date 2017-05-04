/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Categories listed in SideMenu
*/
'use strict'
import React, { Component } from 'react';
import {ScrollView, StyleSheet,TouchableOpacity,Image,Text,View} from 'react-native';
import categories from "../../data-manager/categories.js"
import {Actions} from 'react-native-router-flux';


class CategoryMenu extends Component {

  constructor(props) {
  super(props)
  this.state = {
    //Initialy, isSelected contains an array of false values.
    isSelected: Array(categories.length).fill(false)
  }
}

  render() {


    return (

      <ScrollView scrollsToTop={false} style={styles.categories}>
      {this._renderCategoryImages()}
      </ScrollView>
    );
  }
  _renderCategoryImages(){
    var isSelected= []
    var rows = [];
    for (let i=0; i<categories.length; i++){
      rows.push(
        <TouchableOpacity key = {i} onPress={this._onClickCategoryImage.bind(this,i)} style={[styles.categoryDropDown, {borderRightWidth: this.state.isSelected[i] ? 2 : 0} ]}>
          {this.state.isSelected[i] ?
            <Image source={categories[i].imageFill} style={styles.categoriesLeftSide} /> :
            <Image source={categories[i].image} style={styles.categoriesLeftSide}/> }
            <Text style={styles.categoryNameTxt}> {categories[i].name} </Text>
        </TouchableOpacity>

      )
    }
    return (
      <View>
        {rows}

      </View>
    )
  }
  _onClickCategoryImage = (id) => {
    //Toggle property: when clicked from false => true && true => false
    this.state.isSelected[id]= !this.state.isSelected[id]

    //When clicked the id of the category icon is passed as a prop to the HomeScreen through Actions.refresh.
    Actions.refresh()
  }

};


const styles = StyleSheet.create({
  rowProposalRoot:{
    flexDirection: 'row',
  },
  categories:{
    flexDirection: 'column',
  },
  categoryDropDown:{
    paddingTop: 5,
    marginTop: 25,
    alignItems:'center',
    justifyContent: 'center',
    borderColor: '#ffeb3b',
    //borderColor: '#5d95c4',
    borderRightWidth: 2

  },
  categoriesLeftSide:{

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


module.exports = CategoryMenu
