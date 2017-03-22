import React, { Component } from 'react';
import { ScrollView, StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// TODO: put this into data-manager
const proposals = [
  {title: "Reduce parking lot in 20% in favor of bicycle paking", deadline: "1.5.2017"},
  {title: "increase spending on CSR", deadline: "2.5.2017"},
  {title: "firstOne", deadline: "3.5.2017"},
  {title: "three"   , deadline: "4.5.2017"},
  {title: "three"   , deadline: "5.5.2017"},
]

class ProposalFeed extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      viewsTab: [],
      isTabClosed: false,
      dataSource: ds.cloneWithRows(proposals),
    };
  }

  render() {
    return (
      <View style={styles.proposalFeed}>
        <View style={styles.angleRightRoot}>
          <Icon name='angle-right' style={styles.angleRight} size={40} />
        </View>

        <ListView
        dataSource={this.state.dataSource}
        renderRow={(proposal) => {return this._renderProposalRow(proposal)} }
        />
      </View>


    )
  }

  _renderProposalRow(proposal){
    return(
      <TouchableOpacity style={styles.rowProposalRoot} onPress={()=>this.proposalClicked(proposal)}>
      <View style={styles.titleRoot}>
        <Text style={styles.title}>
          {proposal.title}
        </Text>
      </View>

        <Text style={styles.deadline}>
          {proposal.deadline}
        </Text>
      </TouchableOpacity>

    )
  }

  proposalClicked(proposal){

  }
}

const styles = StyleSheet.create({
  proposalFeed:{
        flexDirection: 'row',
    flex:8,
    backgroundColor: '#ACAEAE'
  },
  rowProposalRoot:{
    backgroundColor: '#EAEBE9',
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
  },
  titleRoot: {
    flex: 1,
    alignItems:'center'
  },
  deadline: {
  },
  angleRightRoot: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#1fbff1',
    justifyContent: 'center'
  },
  angleRight: {
    color: 'white',
  },
});


module.exports = ProposalFeed
