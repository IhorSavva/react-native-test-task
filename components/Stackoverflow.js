/**
 * Created by ihorsavva on 11/3/17.
 */
import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import { connect } from 'react-redux';
import Row from './Row'

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state ={
      items: []
    }
  }

  _keyExtractor = (item, index) => item.id;

  componentWillMount(){
    fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=react_native&site=stackoverflow')
      .then(res=>{
        const items = JSON.parse(res._bodyText).items
        this.setState({
          items: items.map((item, index)=>{return {id: index, title: item.title}})
        })
    })
  }

  render() {
    return (
      <FlatList
        data={this.state.items}
        keyExtractor={this._keyExtractor}
        renderItem={({item, index}) => <Row index={index} text={item.title}/>}
      />
    );
  }
}

export default connect(({routes}) => ({routes}))(Home);
