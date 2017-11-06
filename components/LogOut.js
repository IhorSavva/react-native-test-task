/**
 * Created by ihorsavva on 11/3/17.
 */
import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from 'apsl-react-native-button'
import { logout } from '../redux/actions/auth';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class LogOut extends Component {
  constructor (props) {
    super(props);
  }

  userLogout(){
    this.props.onLogout()
    Actions.login()
  }

  render() {
    return (
      <View  style={styles.container}>
        <Text style={styles.bigText}>Good Bye</Text>
        <Button
          title='Log Out'
          style={styles.buttonStyle} textStyle={styles.textStyle}
          onPress={(e) =>this.userLogout()}>
          Log Out
        </Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => { dispatch(logout()); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  buttonStyle: {
    borderColor: '#8e44ad',
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 3,
    height: 40,
    width: 180,
    alignSelf: 'center',
    marginTop: 60
  },
  textStyle: {
    color: '#8e44ad',
    fontWeight: 'bold'
  },
  bigText: {
    fontSize: 28,
    marginTop: 100
  }
});
