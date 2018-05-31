import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import firebase from 'firebase';

export default class LoginPage extends Component {
  state = { email: '', password: '', error: '', loading: false, loggedIn: null };

  static navigationOptions = {
    title: 'Login'
  };

  constructor(props){
    super(props);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true});

      }else {
        this.setState({loggedIn: false});
      }
    });
  }


  componentWillMount(){

    switch(this.state.loggedIn){
      case true:
        this.props.navigation.navigate('Home')
        break;
      case false:
        this.props.navigation.navigate('Login')
        break;
      default:
        <Spinner size="large" />;
        break;
    }
  }



  onRegisterButtonPress(){
    this.setState({error:''});
    this.props.navigation.navigate('Register')
  }

  onLoginSuccess(){
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
    this.props.navigation.navigate('Home')
  }

  onLoginFail(){
      this.setState({error:'Account not found.', loading: false});
  }

  onLoginButtonPress(){
      /*Log User in*/
      const { email, password } = this.state;
      this.setState({ error: '' , loading: true});
      /*
        Function returns a promise
        Promise: Construct of handling asychronous code
      */
      firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
  }

  renderLoginButton(){
      if(this.state.loading){
        return <Spinner size="small" />;
      }
      return (
        <Button onPress={this.onLoginButtonPress.bind(this)}>
          Log in
        </Button>
      );
    }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
              placeholder="user@gmail.com"
              label="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderLoginButton()}
        </CardSection>
        <CardSection>
        <Button onPress={this.onRegisterButtonPress.bind(this)}>
          Register
        </Button>
        </CardSection>
      </Card>
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
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});
