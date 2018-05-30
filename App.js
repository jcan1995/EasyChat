import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginPage from './src/components/LoginPage';
import RegisterPage from './src/components/RegisterPage';
import HomePage from './src/components/HomePage';
import { createStackNavigator } from 'react-navigation';
import firebase from 'firebase';

const RootStack = createStackNavigator({
  Login: LoginPage,
  Register: RegisterPage,
  Home: HomePage,

});

export default class App extends React.Component {

  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyCcZpVKuMXQTh6QB9sLqmMBg8Vn2jtmYd8',
      authDomain: 'authentication-fe9bf.firebaseapp.com',
      databaseURL: 'https://authentication-fe9bf.firebaseio.com',
      projectId: 'authentication-fe9bf',
      storageBucket: 'authentication-fe9bf.appspot.com',
      messagingSenderId: '683366995053'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true});
      }else {
        this.setState({loggedIn: false});
      }
    });
  }

  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
