/**
 * Created by ihorsavva on 11/3/17.
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';

class Row extends React.Component {
  constructor (props) {
    super(props);
  }

  colorRow (index){
    return [
      styles.listItem,
      {'backgroundColor': index % 2 ? '#fff' : '#CFD8DC'}
    ];
  }

  render() {
    return (
      <View style={this.colorRow(this.props.index)}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(Row);

const styles = StyleSheet.create({
  listItem: {
    padding: 10
  }
});
