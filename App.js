import React, { Component } from 'react';
import { AppRegistry, StatusBar} from 'react-native';
import { Actions, Router, Scene, Drawer } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import Icon from 'react-native-vector-icons/Feather';

import Login  from './components/Login';
import Home  from './components/Home';
import Stackoverflow  from './components/Stackoverflow';
import LogOut  from './components/LogOut';
import NavBarContent  from './components/NavBarContent';

import reducers from './redux/reducers/index';
const store = createStore(reducers);
const ConnectedRouter = connect()(Router);

const Scenes = Actions.create(
  <Scene key='root'>
    <Scene key="login" direction="vertical" component={Login} title="Login" hideNavBar  />
    <Drawer
      hideNavBar
      key="drawer"
      contentComponent={NavBarContent}
      drawerIcon={<Icon name="menu" size={24}/>}
      drawerWidth={300}
    >
      <Scene key="home" component={Home} title="Home"/>
      <Scene key="stackoverflow" component={Stackoverflow} title="Stackoverflow"/>
      <Scene key="logOut" component={LogOut} title="Log Out"/>
    </Drawer>
  </Scene>
);

export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes}/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);