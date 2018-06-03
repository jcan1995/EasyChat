import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import { Input, Spinner, Button } from './common';
import firebase from 'firebase';
import ChatRoomDetail from './ChatRoomDetail';


export default class UserLookUp extends Component {
  state = { username: '', searching: false, user: {}, error: ''};

  onUserPressed(){
    this.props.navigation.navigate('ChatRoom')

  }

  searchUser(){
    this.setState({error:''})

    if(this.state.username){
      this.setState({searching:true});
      const { username } = this.state;

      firebase.database().ref('/users/' + username)
        .once('value')
        .then((snapshot) => {
         this.setState({user:snapshot.val()});
         this.setState({searching: false});
        });
    }else {
      this.setState({error:'Enter a username'})
    }
  }

  renderButton(){
    if(this.state.searching){
      return(
          <Spinner size="small" />
      );
    }
    return (
      <Button onPress={this.searchUser.bind(this)}>
        Search
      </Button>
    );
  }

  render() {
    return(
      <View>
        <View style={styles.containerStyle}>
          <Input
              placeholder="Enter a username"
              label="username"
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />
        </View>

        <View>
          <Text>{this.state.error}</Text>
        </View>


        <View style={styles.containerStyle}>
          {this.renderButton()}
        </View>

        <TouchableHighlight onPress={this.onUserPressed.bind(this)}>
          <View>
            <Text>{this.state.user.username}</Text>
          </View>
        </TouchableHighlight>


      </View>

    );
  }
}

const styles = {

	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	},
  searchStyle:{
    flex: 1,
    alignSelf: 'stretch'
  }

};
