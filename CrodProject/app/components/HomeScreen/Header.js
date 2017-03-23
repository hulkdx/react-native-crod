// TODO: TWO ANDROID ELEMENTS
import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View,Dimensions} from 'react-native';
import categories from '../../data-manager/categories.js'

const publishButtonLocation = require("../../../img/publish-button.png")

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Header extends Component {
  state = {
    viewsTab: [],
    isTabClosed: false,
  };

  render() {
    return (
      <View>
        <TouchableOpacity disabled={this.state.isTabClosed} onPress={()=>this._dropdownOpen()}
          style={styles.topBarRoot}>
          <View style={styles.titleProposalRoot}>
            <Text style={this.state.isTabClosed ? styles.textProposalOpen : styles.textProposalClosed}>choose your proposal</Text>
          </View>
          <Image style={styles.publishImage} source={publishButtonLocation}/>
        </TouchableOpacity>

        { this.state.viewsTab }

      </View>
    )
  }

  _dropdownOpen(){
    this.setState({
      viewsTab:
      <View style={[styles.expandTab]}>

        {this._renderSteps(1,'category')}
        {this._renderCategoryImages()}
        <View style={styles.divider} />

        {this._renderSteps(2,'')}
        <TextInput
          style={styles.textInput}
          placeholder="create a title"/>
        <View style={styles.divider} />

        {this._renderSteps(3,'')}
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={5}
          placeholder="create a description"/>
        <View style={styles.divider} />

        {this._renderSteps(4,'')}
        <Text style={{alignSelf:'center'}}>attachment</Text>
        <View style={styles.divider} />

        <TouchableOpacity style={{alignItems:'center'}}
        onPress={()=>this._dropdownClose()}>
          <Text>done</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
      </View>
      ,
      isTabClosed: true
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

  _renderSteps(id, text){
    return(
      <View style={[styles.stepsRoot]}>
        <Text style={(text!='') ? {position:'absolute',marginLeft:20} : {marginLeft:20}}>step {id}:</Text>
        {(text!='') &&
        <View style={{flex:1, alignItems:'center'}}>
          <Text >{text}</Text>
        </View>
        }
      </View>
    )
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
    backgroundColor: 'white',
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
  textProposalClosed: {

  },
  textProposalOpen: {
     fontSize: 25,
  },
  stepsRoot: {
    flexDirection: 'row',
  },
  categoryDropDown:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryDropDownImage:{
    resizeMode: 'center',
  },
  divider: {
    height: 10,
    backgroundColor: '#b6b6b6'
  }
});

module.exports = Header
