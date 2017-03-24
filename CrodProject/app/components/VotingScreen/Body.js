import React, { Component } from 'react';
import {StyleSheet,Text, Image,View} from 'react-native';
import Tabs from 'react-native-tabs';

// TODO: Remove it or change it to backgroundImage
const backgroundImage = require("../../../img/backgroundblu.jpg")

class Body extends Component {

  constructor(props){
      super(props);
      this.state = {page:'articles'};
    }

  render() {
    console.log(this.props);
    return (
      <Image source={backgroundImage} style={styles.container}>
      {/* Voting Section */}
        <View style={styles.votingBar}>
          <View style={styles.votingBarRed}/>
          <View style={styles.votingBarMiddle}/>
          <View style={styles.votingBarGreen}/>
        </View>
      {/* Articles / Disscussion Tab Section */}
      <View style={styles.tabContainer}>
      <Tabs selected={this.state.page}
          onSelect={el=>this.onSelectedTab(el)}
          style={styles.tabs}>
          <Text name="articles" style={styles.textStyle}
                selectedIconStyle={styles.tabsSelectedOne}>Articles</Text>
          <Text name="Disscussion" style={styles.textStyle}
                selectedIconStyle={styles.tabsSelectedTwo}>Disscussion</Text>
      </Tabs>
      </View>
      {/* Articles / Comments body Section */}
      <View style={styles.bodyContainer}>
      </View>

      </Image>

    )
  }

  onSelectedTab(el){
    this.setState({page:el.props.name})
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 5,
    width: null, height: null,
  },
  votingBar:{
    flex:1,
    flexDirection: 'row',

  },
  votingBarRed:{
    flex:3,
    backgroundColor: 'red'
  },
  votingBarMiddle:{
    flex:1,
    backgroundColor: 'blue'
  },
  votingBarGreen:{
     flex:3,
    backgroundColor: 'green'
  },
  tabContainer:{
    flex: 2,
    backgroundColor: 'white'
  },
  bodyContainer:{
    flex: 10,
    backgroundColor: 'white',
  },
  tabsSelectedOne: {
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#1fbff1'
  },
  tabsSelectedTwo: {
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#1fbff1'
  },
  textStyle:{
    fontSize: 18.5
  },
});

module.exports = Body
