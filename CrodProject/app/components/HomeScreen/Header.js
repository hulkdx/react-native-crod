/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Header
  TODO: TWO ANDROID ELEMENTS are used in this file
*/
'use strict'
import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View,Dimensions,ScrollView} from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RadioButtons } from 'react-native-radio-buttons'
import {Actions, ActionConst} from 'react-native-router-flux'
import AutoExpandingTextInput from 'react-native-auto-expanding-textinput'
import * as proposalsActions from '../../reducers/proposals/proposalsActions'

// TODO: change this with categories picture of website
import categories from '../../data-manager/categories.js'
import DatePicker from './DateTimePicker/DatePicker.js'

const proposalIcon = require("../../../img/proposal-icon.png")
const searchIcon = require("../../../img/search-icon1.png")
const profilePhoto = require("../../../img/notification/man1.png")
const closeIcon = require("../../../img/close-icon.png")

const PADDING = 16;

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Header extends Component {
  // isTabOpen is used for create proposal
  state = {
    isTabOpen: false,
    textInputValue: '',
    date: ''
  };

  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.profile} onPress={()=> {Actions.profile({type: ActionConst.REFRESH}) }}>
          <Image source={profilePhoto} style={styles.profilePhoto}/>
            </TouchableOpacity>
          <TouchableOpacity style={styles.search}>

           <View style={styles.searchBtnContainer}>
           <Image style={styles.searchBtn} source={searchIcon}/>
           </View>

           <TextInput
                editable = {!this.state.isTabOpen}
                placeholder = "enter proposal title"
                placeholderTextColor = "#5d95c4"
                underlineColorAndroid='transparent'
                style={styles.searchText}/>
          </TouchableOpacity>
          {/* Create Proposal Button */}
           <TouchableOpacity onPress={this.state.isTabOpen == false ? this.onClickCreateProposal : this.onCloseTab}
                             style={styles.proposal}>
            { this.state.isTabOpen == false ? <Image style={styles.proposalBtn} source={proposalIcon}/> : <Image style={styles.proposalBtn} source={closeIcon}/> }
           </TouchableOpacity>
         </View>
         <ScrollView>

         { this.state.isTabOpen && this._renderCreateProposalViews() }
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

        <TouchableOpacity style={styles.createProposalBtnContainer} onPress={this.onClickDone}>
          <Text style={styles.createProposalBtn}>Create Proposal</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
    </View>
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
          <Text style={styles.stepsText}>Pick a Category</Text>
          {/* Render category Images (When create proposal is open) is uses RadioButtons
             (from: https://github.com/ArnaudRinquin/react-native-radio-buttons)*/}
          <RadioButtons
            options={ categories }
            renderOption={ this.renderCategoryOption }
            renderContainer={ RadioButtons.renderHorizontalContainer }
          />
        </View>

        break;
      // Title
      case 2:
        views =
        <View>
        <Text style={styles.stepsText}>Choose a Title</Text>
        <AutoExpandingTextInput
          style={styles.textInput}
          underlineColorAndroid={'transparent'}
          enablesReturnKeyAutomatically={true}
          returnKeyType="done"
          placeholder="the title must be 50-200 characters long."
          placeholderTextColor="#d7dade"
          minHeight={70}
          maxHeight={1000}
          maxLength={200}
          onChangeHeight={this._onChangeHeight}
        />
        </View>
        break;
      // Description
      case 3:
        views =
        <View>
        <Text style={styles.stepsText}>Description</Text>
        <AutoExpandingTextInput
          style={styles.textInput}
          underlineColorAndroid={'transparent'}
          enablesReturnKeyAutomatically={true}
          returnKeyType="done"
          minHeight={70}
          maxHeight={1000}
          maxLength={500}
          placeholder="the description must be 250-500 characters long."
          placeholderTextColor="#d7dade"
          onChangeHeight={this._onChangeHeight}
        />

        </View>
        break;
      // Deadline
      case 4:
        views =
        <View style={styles.deadlineContainer}>
        <Text style={styles.stepsText}>Deadline</Text>
        <DatePicker
          style={styles.deadlineTextInput}
          date={this.state.datetime1}
          mode="date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconSource={require('../../../img/deadline-icon.png')}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          minuteInterval={10}
          onDateChange={(datetime) => {this.setState({datetime1: datetime});}}
        />
        <DatePicker
          style={styles.deadlineTextInput}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconSource={require('../../../img/time-icon.png')}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 3
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          minuteInterval={10}
          onDateChange={(time) => {this.setState({time: time});}}
        />
        </View>
        break;
      // Attachment
      case 5:
        views =
        <View style={styles.attachments}>
        <Text style={styles.stepsText}>Attachments</Text>
        <TouchableOpacity>
          <Image style={styles.attachMore} source={require("../../../img/add-more-icon.png")}/>
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

  _onChangeHeight(before, after) {
   //console.log('before: ' + before + ' after: ' + after);
 }

/* on done clicked (When create proposal is open), set isTabOpen */
  onClickDone = () => {
    // TODO: Check for it TextInput is empty
    this.props.createProposal();
    // TODO: Add new proposal
    this.setState((state) => ({ isTabOpen: false}))
  }

  onCloseTab = () => {
    this.setState((state) => ({ isTabOpen: false}))
  }
}

const styles = StyleSheet.create({
  createProposal: {
    flex:1,
    marginLeft: 50,
  },
  expandTab: {
    backgroundColor: '#FFF',
  },
  headerContainer:{
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: "#5d95c4",
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    flex: 1,
    marginLeft: 15,
  },
  search: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#E9EBEE',

  },
  searchBtnContainer: {
    height: 37,
    paddingLeft: 5,
    paddingTop: 2,
  },
  searchText: {
    flex: 1,
    height: 37,
    fontSize: 15,
    marginTop: 5,
    color: '#5d95c4',
    fontFamily: 'Roboto',

  },
  proposal: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10
  },
  searchBtn: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: '#5d95c4',
  },
  proposalBtn: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
    tintColor: '#5d95c4'
  },
  profilePhoto: {
    height: 35,
    width: 35,
    resizeMode: 'contain',
  },
  textInput: {
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E9EBEE',
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 16,
  },
  stepsRoot: {
    flexDirection: 'row',
  },
  stepsText: {
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#5d95c4',
    fontSize: 18,
  },
  categoryDropDown:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage:{
    width: 50,
    height: 50,
    tintColor: '#bacedf',
    resizeMode: 'contain',
  },
  categorySelectedImage: {
    width: 50,
    height: 50,
    tintColor: '#5d95c4',
    resizeMode: 'contain',
  },
  divider: {
    height: 1,
    backgroundColor: '#5d95c4'
  },
  deadlineContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10
  },
  deadlineTextInput: {
    flex: 1,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#E9EBEE',
    backgroundColor: 'white',
    borderRadius: 10,

  },
  createProposalBtn: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#1070b6',
    padding: 15,
    borderRadius: 10,
  },
  createProposalBtnContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems:'center',
    marginBottom: 50,
  },
  attachMore: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    tintColor: '#1070b6',
    marginLeft: 15
  },
  attachments: {
    flexDirection: 'row'
  }


});

// Redux boilerplate
function mapStateToProps (state) {
  return {
    proposals: state.proposals,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(proposalsActions, dispatch)
}
export default connect(mapStateToProps , mapDispatchToProps)(Header);
