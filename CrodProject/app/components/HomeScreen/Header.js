// TODO: TWO ANDROID ELEMENTS
import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View,Dimensions,ScrollView} from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons'
import CategoryHeader from './CategoryHeader.js'

import categories from '../../data-manager/categories.js'

const proposalIcon = require("../../../img/proposal-icon.png")
const searchIcon = require("../../../img/search-icon1.png")
const profilePhoto = require("../../../img/notification/man1.png")

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Header extends Component {
  state = {
    isTabOpen: false,
  };

  render() {
    /* createProposalViews: is the view of the proposal create when its clicked */
    const createProposalViews = this._renderCreateProposalViews();

    return (
      <View>
      <ScrollView>
{/* CategoryHeader: Shows the Category (image) when SideMenu clicked
  The id of the category received as a prop from the HomeScreen.js
  to then be passed as a prop to the HomeScreen/CategoryHeader.js */}
        <CategoryHeader categoryId={this.props.categoryId} />
{/* Create Proposal Button */}
        <View style={styles.topBarRoot}>
        <View style={styles.profile}>
        <Image source={profilePhoto} style={styles.profilePhoto}/>
          </View>
        <TouchableOpacity style={styles.search}>

         <Image style={styles.proposalBtn} source={searchIcon}/>

         <TextInput
              placeholder = "enter proposal title"
              placeholderTextColor = "#88B3D9"
              style={styles.searchText}/>
              </TouchableOpacity>
         <TouchableOpacity disabled={this.state.isTabOpen}
                          onPress={this.onClickCreateProposal}
                          style={styles.proposal}>

          <Image style={styles.proposalBtn} source={proposalIcon}/>
         </TouchableOpacity>
         </View>
{/* Create Proposal Button When its clicked it shows these views */}
        { this.state.isTabOpen && createProposalViews }
      </ScrollView>
      </View>
    )
  }
/* Views of the create proposal */
  _renderCreateProposalViews(){
    return(
      <View style={[styles.expandTab]}>
        {this._renderSteps(1)}

        {this._renderSteps(2)}

        {this._renderSteps(3)}

        {this._renderSteps(4)}

        {this._renderSteps(5)}

        <TouchableOpacity style={{alignItems:'center'}}
        onPress={this.onClickDone}>
          <Text>done</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
    </View>
    )
  }
/* Render category Images (When create proposal is open) is uses RadioButtons
   (from: https://github.com/ArnaudRinquin/react-native-radio-buttons)*/
  _renderCategoryImages(){
    return (
      <RadioButtons
        options={ categories }
        renderOption={ this.renderCategoryOption }
        renderContainer={ RadioButtons.renderHorizontalContainer }
      />
    )
  }
/* Render RadioButtons Options that is image of the categories */
  renderCategoryOption(option, selected, onSelect, index){
    const style = selected ? styles.categorySelectedImage : styles.categoryImage;

    return (
      <TouchableOpacity onPress={onSelect} style={styles.categoryDropDown} key={index}>
      <Image key={index} source={categories[index].image}
             style={style}/>
      </TouchableOpacity>
    );
  }
/* render each steps of create proposal
   @param id: id of the step */
  _renderSteps(id){
    var views = [];

    switch (id) {
      // Categories
      case 1:
        views =
        <View>
        <Text style={styles.stepsText}>Choose a category</Text>
        {this._renderCategoryImages()}
        </View>

        break;
      // Title
      case 2:
        views =
        <View>
        <Text style={styles.stepsText}>Choose a Title</Text>
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={2}
          underlineColorAndroid='transparent'
          placeholder="the title must be 50-200 characters long."/>
        </View>
        break;
      // Description
      case 3:
        views =
        <View>
        <Text style={styles.stepsText}>Description</Text>
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={4}
          placeholder="the description must be 250-500 characters long."/>
        </View>
        break;
      // Deadline
      case 4:
        views =
        <View>
        <Text style={styles.stepsText}>Deadline</Text>
        </View>
        break;
      // Attachment
      case 5:
        views =
        <View>
        <Text style={styles.stepsText}>Attachment</Text>
        <TouchableOpacity style={{alignSelf:'center'}}>
          <Image source={require("../../../img/attachment.png")}/>
        </TouchableOpacity>
        </View>
        break;
    }
    return(
      <View>
        {views}
      </View>
    )
  }

/* When create proposal clicked, set isTabOpen */
  onClickCreateProposal = () => {
    this.setState({
      isTabOpen: true
    });
  }

/* on done clicked (When create proposal is open), set isTabOpen */
  onClickDone = () => {
    // TODO: Check for it TextInput is empty
    if (!true) return;
    // TODO: Add new proposal
    this.setState((state) => ({ isTabOpen: false}))
  }
}

const styles = StyleSheet.create({
  createProposal: {
    flex:1,
    marginLeft: 50,
  },
  expandTab: {
    backgroundColor: 'white',
  },
  topBarRoot:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: "#88B3D9",
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    flex: 1,
    paddingLeft: 15,
  },
  search: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchText: {
    flex: 1
  },
  proposal: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10
  },

  proposalBtn: {
    height: 30,
    resizeMode: 'contain',
    tintColor: '#88B3D9'
  },
  profilePhoto: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  textInput: {
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#88B3D9',
    fontSize: 16
  },
  stepsRoot: {
    flexDirection: 'row',
  },
  stepsText: {
    marginLeft: 10,
    marginTop: 5,
    color: 'rgba(136, 179, 217, 0.9)',
    fontSize: 18,
    fontWeight: 'bold'
  },
  categoryDropDown:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage:{
    resizeMode: 'center',
  },
  categorySelectedImage: {
    tintColor: '#88B3D9',
    resizeMode: 'center',
  },
  divider: {
    height: 5,
    backgroundColor: '#b6b6b6'
  },


});

module.exports = Header
