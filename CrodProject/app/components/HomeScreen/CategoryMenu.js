import React, { Component } from 'react';
import {ScrollView, StyleSheet,TouchableOpacity,Image,Text,View} from 'react-native';
import categories from "../../data-manager/categories.js"
import {Actions} from 'react-native-router-flux';


class CategoryMenu extends Component {





  render() {

    return (

      <ScrollView scrollsToTop={false} style={styles.categories}>
      {this._renderCategoryImages()}
      </ScrollView>
    );
  }
  _renderCategoryImages(){
    var rows = [];
    for (let i=0; i<categories.length; i++){
      rows.push(
        <TouchableOpacity key = {i} onPress={this._onClickCategoryImage.bind(this,i)} style={styles.categoryDropDown}>
            <Image source={categories[i].image} style={styles.categoriesLeftSide}/>
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
    //When clicked the id of the category icon is passed as a prop to the HomeScreen through Actions.refresh.
    Actions.refresh({key: 'home', categoryId: id})
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
    marginTop: 25,
    alignItems:'center',
    justifyContent: 'center'

  },
  categoriesLeftSide:{
    tintColor: 'white',
    height: 50,
    width: 50,
    resizeMode: 'contain',

  },
  categoryNameTxt: {
    marginTop: 5,
    color: 'white'
  }
});


module.exports = CategoryMenu
