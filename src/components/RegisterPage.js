import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import firebase from 'firebase';

export default class RegisterPage extends Component {

  state = { email: '', username: '', password: '', confirmPassword: '', error: '', loading: false };

  static navigationOptions = {
    title: 'Register'
  };

  onRegisterButtonPress(){
    /*Create account with Firebase*/
    const { email, password, confirmPassword } = this.state;
    this.setState({loading: true});
    if(password == confirmPassword){
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(this.onRegisterSuccess.bind(this))
      .catch(this.onRegisterFail.bind(this));
    }else{
      this.setState({error:'Passwords do not match.'})
    }
  }
  onRegisterSuccess(){
    
    /*Todo: Create user instance in firebase DB*/

    /*Go back to home*/
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
    this.props.navigation.navigate('Login');

  }

  onRegisterFail(){
    this.setState({error: 'Registration Failed.',loading: false});
  }

  renderButton(){
    if(this.state.loading){
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={this.onRegisterButtonPress.bind(this)}>
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
              placeholder="jane_doe"
              label="Username"
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
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

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Confirm Password"
            value={this.state.confirmPassword}
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
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
