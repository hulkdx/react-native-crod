import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView} from 'react-native';
import Tabs from 'react-native-tabs';
import Body from '../HomeScreen/Body.js'

class ProfileBody extends Component {

  constructor(props){
      super(props);
      this.state = {page:'proposal'};
    }

  render() {
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page}
            onSelect={el=>this.setState({page:el.props.name})}
            style={styles.tabs}>
            <Text name="proposal"
                  selectedIconStyle={styles.tabsSelected}>Your Proposals</Text>
            <Text name="history"
                  selectedIconStyle={styles.tabsSelected}>History votes </Text>
        </Tabs>
        <Body />

      </View>


    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex:8,
    backgroundColor: '#ADDBE5',
  },
  tabs: {
    position:'relative',
  },
  tabsSelected: {
    backgroundColor: 'white',
  },
});

module.exports = ProfileBody
