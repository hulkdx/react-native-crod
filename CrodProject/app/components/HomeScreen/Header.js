// TODO: TWO ANDROID ELEMENTS
import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View,Dimensions} from 'react-native';

// Lists of Categories {name, image}
var test = require("../../../img/publish-button.png")
const categories = [
  {name: "environment", image: require("../../../img/categories/environment.png")},
  {name: "financial", image: require("../../../img/categories/financial.png")},
  {name: "politics", image: require("../../../img/categories/politics.png")},
  {name: "science", image: require("../../../img/categories/science.png")},
  {name: "social", image: require("../../../img/categories/social.png")},
]
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Header extends Component {
  state = {
    viewsTab: [],
    isTabClosed: false,
  };

  render() {
    return (
      <View style={this.props.style}>
        <TouchableOpacity disabled={this.state.isTabClosed} onPress={()=>this._dropdownOpen()}
          style={styles.topBarRoot}>
          <View style={styles.titleProposalRoot}>
            <Text style={styles.textProposal}>choose your proposal</Text>
          </View>
          <Image style={styles.publishImage} source={test}/>
        </TouchableOpacity>

        {/* this.state.viewsTab */}
        <View style={[styles.expandTab]}>
          <View  style={[styles.stepOneRoot]}>
            <Text> step 1:</Text>
            <Text style={{flex:1, alignItems:'center'}}>catagory</Text>
          </View>
          {/* Category Images */}
          {this._renderCategoryImages()}

          <View  style={[styles.stepOneRoot]}>

          </View>

          <TextInput
            style={styles.textInput}
            placeholder="create a title"/>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={5}
            placeholder="create a description"/>
          <Text>attachment</Text>
          <TouchableOpacity
          onPress={()=>this._dropdownClose()}>
            <Text>done</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }

  _dropdownOpen(){
    this.setState({
      viewsTab:
      <View style={[styles.expandTab]}>
        <View  style={[styles.stepOneRoot]}>
          <Text> step 1:</Text>
          <Text style={{flex:1, alignItems:'center'}}>catagory</Text>
        </View>
        {/* Category Images */}
        {this._renderCategoryImages()}

        <View  style={[styles.stepOneRoot]}>

        </View>

        <TextInput
          style={styles.textInput}
          placeholder="create a title"/>
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={5}
          placeholder="create a description"/>
        <Text>attachment</Text>
        <TouchableOpacity
        onPress={()=>this._dropdownClose()}>
          <Text>done</Text>
        </TouchableOpacity>
      </View>
      ,
      isTabClosed: false
    });
  }

  _dropdownClose(){
    this.setState((state) => ({viewsTab: [], isTabClosed: false}))
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
      <View style={{flexDirection: 'row'}}>
        {rows}
      </View>
    )
  }

  _onClickCategoryImage(id){
    console.log("test");
  }
}

const styles = StyleSheet.create({
  createProposal: {
    flex:1,
    marginLeft: 50,
  },
  titleProposalRoot: {
    flex: 4,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  expandTab: {
    backgroundColor: '#b6b6b6',
  },
  topBarRoot:{
    flexDirection: 'row',
    backgroundColor: '#b6b6b6',
  },
  publishImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    marginRight: 5,
  },
  textInput: {

  },
  stepOneRoot: {
    flexDirection: 'row',
  },
  categoryDropDown:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryDropDownImage:{
    resizeMode: 'center',
  }
});

module.exports = Header
