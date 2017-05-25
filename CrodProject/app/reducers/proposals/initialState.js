/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  InitialState
*/
'use strict';

const { Record } = require('immutable');

const InitialState = Record({
  error: null,
  isFetching: false,
  isCreated: false,
  proposalsUpdated: false,
  proposals: [
    // {
      // articles: 0,
      // category_id: 0,
      // category_name: '',
      // category_source: '',
      // category_source_fill: '',
      // deadline: "2017-05-12T08:32:01Z",
      // description: "",
      // discussions: 0,
      // id: 0,
      // title: ''
      // user: [
      //   first_name: ''
      //   last_name: ''
      //   is_your_proposal: false,
      //   profile_pic_url: ''
      // ]
      // are_you_voted: false
    // }
  ],
  filteredProposals: [],
  proposalId: 0,
});

export default InitialState;
