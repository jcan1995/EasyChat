import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Input, Spinner, Button } from './common';
import firebase from 'firebase';
import ChatRoomDetail from './ChatRoomDetail';


export default class UserLookUp extends Component {
  state = { username: '', searching: false, user: {}, error: ''};

  searchUser(){
    this.setState({error:''})

    console.log("In searchUser");

    if(this.state.username){
      this.setState({searching:true});
      // this.setState({users: []});

      const { username } = this.state;

      firebase.database().ref('/users/' + username)
        .once('value')
        .then((snapshot) => {
          // this.setState({users: this.state.users.concat(snapshot.val().username)});
         console.log(snapshot.val());
         this.setState({user:snapshot.val()});
         this.setState({searching: false});
         console.log("User: " + this.state.user.email);

        });
    }
    else {
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

//   renderUsers(){
//     if(this.state.users){
//       console.log("Before map function!");
//       return(
//         this.state.users.map((item, key)=>(<ChatRoomDetail key={key} username={item}/>))
//       );
//     }
//     else {
//       console.log("In else");
//
//     }
//
// }

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

        <View>
          <Text>{this.state.user.username}</Text>
        </View>

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
