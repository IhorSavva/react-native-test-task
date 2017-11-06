/**
 * Created by ihorsavva on 11/3/17.
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.bigText}>Hello, {this.props.auth.username}!</Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => state;

export default connect(mapStateToProps, ({routes}) => ({routes}))(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  bigText: {
    fontSize: 28,
    marginTop: 100
  },
});
