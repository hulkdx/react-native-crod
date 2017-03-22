import React, { Component } from 'react';
import {ScrollView, StyleSheet,TouchableOpacity,Image,Text,View} from 'react-native';
import categories from "../../data-manager/categories.js"


class CategoryMenu extends Component {


  render() {

    return (



      <ScrollView scrollsToTop={false}>


      {this._renderCategoryImages()}
      </ScrollView>
    );
  }
  _renderCategoryImages(){
    var rows = [];
    for (let i=0; i<categories.length; i++){
      rows.push(
        <TouchableOpacity key = {i} onPress={()=>this._onClickCategoryImage(i)} style={styles.categoryDropDown}>
            <Image source={categories[i].image} style={styles.categoryDropDownImage}/>
        </TouchableOpacity>
      )
    }
    return (
      <View style={styles.categories}>
        {rows}
      </View>
    )
  }
  _onClickCategoryImage(id){
    console.log("test");
  }

};


const styles = StyleSheet.create({
  rowProposalRoot:{
    flexDirection: 'row',
  },
  categories:{
    flexDirection: 'column',
    backgroundColor: '#1fbff1'
  }
});


module.exports = CategoryMenu
