/**
 * Created by ihorsavva on 11/3/17.
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class NavBarContent extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listItem} >
          <Text onPress={Actions.home}>
            Home
          </Text>
        </View>
        <View style={styles.listItem} >
          <Text onPress={Actions.stackoverflow}>
            Stackoverflow
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text onPress={Actions.logOut}>
            Log Out
          </Text>
        </View>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(NavBarContent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  listItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#CFD8DC'
  }
});
