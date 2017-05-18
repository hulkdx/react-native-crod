/*
  Created by Mohammad Jafarzadeh Rezvan

  Create proposal screen
*/
'use strict';
import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, Image, Text, View, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RadioButtons } from 'react-native-radio-buttons';
import { Actions } from 'react-native-router-flux';
import _ from 'underscore';
import AutoExpandingTextInput from 'react-native-auto-expanding-textinput';
import * as categoryActions from '../../reducers/categories/categoryActions';
import * as proposalsActions from '../../reducers/proposals/proposalsActions';
import DatePicker from './DateTimePicker/DatePicker.js';

const TITLE_MIN_LENGTH = 0;
const TITLE_MAX_LENGTH = 100;
const DESC_MIN_LENGTH = 0;
const DESC_MAX_LENGTH = 400;

const TimeIcon = require('../../../img/time-icon.png');
const DeadlineIcon = require('../../../img/deadline-icon.png');
const AddMoreIcon = require('../../../img/add-more-icon.png');

class CreateProposal extends Component {

  constructor() {
    super();
    // isTabOpen is used for create proposal
    this.state = {
      textInputValue: '',
      date: '',
      title: '',
      desc: '',
      deadlineDay: '',
      deadlineTime: '',
      isValidCreateProposal: true,
      validationText: '',
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this._renderSteps(1)}

        {this._renderSteps(2)}

        {this._renderSteps(3)}

        {this._renderSteps(4)}

        {this._renderSteps(5)}

        {!this.state.isValidCreateProposal && <Text style={styles.validationText}>{this.state.validationText}</Text>}
        {this.props.isFetching && <ActivityIndicator style={styles.loadingsIndicator} size="large" />}
        <TouchableOpacity disabled={this.props.isFetching} style={styles.createProposalBtnContainer} onPress={this.onClickDone}>
          <Text style={styles.createProposalBtn}>Create Proposal</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  /* render each steps of create proposal
     @param id: id of the step */
  _renderSteps(id) {
    switch (id) {
      default:
        break;
      // Categories
      case 1:
        return (
          <View>
            <Text style={styles.stepsText}>Pick a Category</Text>
            {/* Render category Images (When create proposal is open) is uses RadioButtons
            from: @link https://github.com/ArnaudRinquin/react-native-radio-buttons */}
            <RadioButtons
              options={this.props.category.category}
              onSelection={this.setSelectedOption.bind(this)}
              renderOption={this.renderCategoryOption.bind(this)}
              selectedOption={this.state.selectedOption}
              renderContainer={RadioButtons.renderHorizontalContainer}
            />
          </View>
        );
      // Title
      case 2:
        return (
          <View>
          <Text style={styles.stepsText}>Choose a Title</Text>
          <AutoExpandingTextInput
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            enablesReturnKeyAutomatically
            returnKeyType="done"
            placeholder={`the title must be ${TITLE_MIN_LENGTH}-${TITLE_MAX_LENGTH} characters long.`}
            placeholderTextColor="#d7dade"
            minHeight={70}
            maxHeight={1000}
            maxLength={200}
            onChangeText={(text) => this.setState({ title: text })}
            onChangeHeight={() => {}}
          />
          </View>
        );
      // Description
      case 3:
        return (
          <View>
          <Text style={styles.stepsText}>Description</Text>
          <AutoExpandingTextInput
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            enablesReturnKeyAutomatically
            returnKeyType="done"
            minHeight={70}
            maxHeight={1000}
            maxLength={500}
            placeholder={`the description must be ${DESC_MIN_LENGTH}-${DESC_MAX_LENGTH} characters long.`}
            placeholderTextColor="#d7dade"
            onChangeText={(text) => this.setState({ desc: text })}
            onChangeHeight={() => {}}
          />
          </View>
        );
      // Deadline
      case 4:
        return (
          <View style={styles.deadlineContainer}>
          <Text style={styles.stepsText}>Deadline</Text>
          <DatePicker
            style={styles.deadlineTextInput}
            date={this.state.deadlineDay}
            mode="date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconSource={DeadlineIcon}
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
            onDateChange={(datetime) => { this.setState({ deadlineDay: datetime }); }}
          />
          <DatePicker
            style={styles.deadlineTextInput}
            date={this.state.deadlineTime}
            mode="time"
            format="HH:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconSource={TimeIcon}
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
            onDateChange={(time) => { this.setState({ deadlineTime: time }); }}
          />
          </View>
        );
      // Attachment
      case 5:
        return (
          <View style={styles.attachments}>
          <Text style={styles.stepsText}>Attachments</Text>
          <TouchableOpacity>
            <Image style={styles.attachMore} source={AddMoreIcon} />
          </TouchableOpacity>
          </View>
        );
    }
  }

  /* Render RadioButtons Options that is image of the categories */
  renderCategoryOption(option, selected, onSelect, index) {
    const style = selected ? styles.categorySelectedImage : styles.categoryImage;
    return (
      <TouchableOpacity onPress={onSelect} style={styles.categoryDropDown} key={index}>
        <Image key={index} source={{ uri: this.props.category.category[index].source }} style={style} />
      </TouchableOpacity>
    );
  }

  setSelectedOption(selectedOption) {
    this.setState({
      selectedOption
    });
  }

  /* on done clicked (When create proposal is open), set isTabOpen */
  onClickDone = () => {
    // Validation
    if (this.validateCreateProposal()) return;
    // Convert to ISO date time
    const deadline = `${this.state.deadlineDay}T${this.state.deadlineTime}:00Z`;
    // Add new proposal
    this.props.createProposal(this.state.selectedOption.id, this.state.title,
                              this.state.desc, deadline);
    // this.props.createProposal('3','test','test','2017-05-16T11:19:00Z');
    // then it goes to componentWillReceiveProps and check if it was successful without error
  }

  validateCreateProposal() {
    if (_.isUndefined(this.state.selectedOption)) {
      this.setState({
        isValidCreateProposal: false,
        validationText: 'Category is not selected'
      });
      return true;
    } else if (this.state.title === '') {
      this.setState({
        isValidCreateProposal: false,
        validationText: 'Title is empty'
      });
      return true;
    } else if ((this.state.title.length < TITLE_MIN_LENGTH) ||
        (this.state.title.length > TITLE_MAX_LENGTH)) {
      this.setState({
        isValidCreateProposal: false,
        validationText: `Title is not between ${TITLE_MIN_LENGTH}-${TITLE_MAX_LENGTH}`
      });
      return true;
    } else if (this.state.desc === '') {
      this.setState({
        isValidCreateProposal: false,
        validationText: 'Description is empty'
      });
      return true;
    } else if ((this.state.desc.length < DESC_MIN_LENGTH) ||
        (this.state.desc.length > DESC_MAX_LENGTH)) {
      this.setState({
        isValidCreateProposal: false,
        validationText: `Description is not between ${DESC_MIN_LENGTH}-${DESC_MAX_LENGTH}`
      });
      return true;
    } else if (this.state.deadlineTime === '' || this.state.deadlineDay === '') {
      this.setState({
        isValidCreateProposal: false,
        validationText: 'Deadline is empty'
      });
      return true;
    }
    return false;
  }

  componentWillReceiveProps(nextProps) {
    // // Close the tab when it is successful
    if (!nextProps.isProposalCreated) return;
     Actions.refresh({ createProposal: false });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: '#FFF',
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
  stepsText: {
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#5d95c4',
    fontSize: 18,
  },
  categoryDropDown: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: 50,
    height: 50,
    tintColor: '#bacedf',
    resizeMode: 'contain',
  },
  categorySelectedImage: {
    width: 60,
    height: 60,
    tintColor: '#5d95c4',
    resizeMode: 'contain',
  },
  deadlineContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
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
    alignItems: 'center',
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
  },
  validationText: {
    flex: 1,
    color: 'red',
    alignSelf: 'center'
  },
  loadingsIndicator: {

  }
});

// Redux boilerplate
function mapStateToProps(state) {
  return {
    category: state.category,
    isProposalCreated: state.proposals.isCreated,
    isFetching: state.proposals.isFetching,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...categoryActions, ...proposalsActions }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProposal);
