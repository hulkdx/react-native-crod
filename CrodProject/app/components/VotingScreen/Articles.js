/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Articles tab bar
*/
'use strict'
import React, { Component } from 'react';
import {StyleSheet,Text,Image,View,ListView} from 'react-native';

import articleData from '../../data-manager/articles'
const dividerImage = require("../../../img/dividerblue.jpg")

class Articles extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(articleData),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={(article) => {return this._renderArticleRow(article)} }
        />
      </View>
    )
  }

  _renderArticleRow(article){
    return(
      <View style={styles.articleTitleContainer}>
        <Text style={styles.articleTitleText}>
          {article.title}
        </Text>
        <Image style={{height: 2}} source={dividerImage}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  articleTitleContainer:{
    alignItems:'center',
  },
  articleTitleText:{
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20
  }
});

module.exports = Articles
