// TODO: TWO ANDROID ELEMENTS
import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View,Dimensions,ScrollView} from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons'
import CategoryHeader from './CategoryHeader.js'

import categories from '../../data-manager/categories.js'

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
        <TouchableOpacity disabled={this.state.isTabOpen}
                          onPress={this.onClickCreateProposal}
                          style={styles.topBarRoot}>
          <View style={styles.titleProposalRoot}>
            <Text style={this.state.isTabOpen ? styles.textProposalOpen : styles.textProposalClosed}>choose your proposal</Text>
          </View>
        </TouchableOpacity>
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
        views = this._renderCategoryImages()
        break;
      // Title
      case 2:
        views =
        <TextInput
          style={styles.textInput}
          placeholder="create a title"/>
        break;
      // Description
      case 3:
        views =
        <TextInput
          style={styles.textInput}
          multiline={true}
          numberOfLines={5}
          placeholder="create a description"/>
        break;
      // Deadline
      case 4:
        views =
        <Text style={{alignSelf:'center'}}>Deadline</Text>
        break;
      // Attachment
      case 5:
        views =
        <Text style={{alignSelf:'center'}}>attachment</Text>
        break;
    }
    return(
      <View>
        <Text style={styles.stepsText}>step {id}:</Text>
        {views}
        <View style={styles.divider} />
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
  textProposalClosed: {

  },
  textProposalOpen: {
     fontSize: 25,
  },
  stepsRoot: {
    flexDirection: 'row',
  },
  stepsText: {
    marginLeft: 10,
    marginTop: 5,
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
    tintColor: 'blue',
    resizeMode: 'center',
  },
  divider: {
    height: 5,
    backgroundColor: '#b6b6b6'
  }
});

module.exports = Header
