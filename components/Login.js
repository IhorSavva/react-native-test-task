/**
 * Created by ihorsavva on 11/3/17.
 */
  import React, { Component } from 'react';
import {StyleSheet, Keyboard, TextInput, Text, View, KeyboardAvoidingView, ToastAndroid, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'apsl-react-native-button'
import { login } from '../redux/actions/auth';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Auth from '../services/request'

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp()
      return true;
    });
  }
  userLogin () {
    if (Auth.login(this.state.username, this.state.password)){
      this.props.onLogin(this.state.username);
      Keyboard.dismiss()
      BackHandler.removeEventListener('hardwareBackPress')
      Actions.home()
    } else {
      ToastAndroid.show('Incorrect username or password', ToastAndroid.SHORT);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.bigText}>Welcome</Text>

        <View style={styles.inputContainer}>
          <Icon name="user" size={20}/>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.input}
            placeholder="username"
            returnKeyType="next"
            onSubmitEditing={() =>this.passwordInput.focus()}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20}/>
          <TextInput
            underlineColorAndroid='transparent'
            style={styles.input}
            placeholder="password"
            returnKeyType="go"
            secureTextEntry
            ref={(input)=>this.passwordInput = input}
            onChangeText={(password) => this.setState({password})}
            onSubmitEditing={(e) => this.userLogin(this.state.username, this.state.password)}
            value={this.state.password}
          />
        </View>

        <Button
          title='Log In'
          style={styles.buttonStyle} textStyle={styles.textStyle}
          onPress={(e) => this.userLogin(this.state.username, this.state.password)}>
          Log In
        </Button>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (username) => { dispatch(login(username)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 10,
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    flex: 0.8
  },
  buttonStyle: {
    borderColor: '#8e44ad',
    backgroundColor: 'white',
    borderRadius: 0,
    borderWidth: 3,
    height: 40,
    width: 180,
    alignSelf: 'center',
    marginTop: 40
  },
  textStyle: {
    color: '#8e44ad',
    fontWeight: 'bold'
  },
  bigText: {
    fontSize: 28,
    marginBottom: 40
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
