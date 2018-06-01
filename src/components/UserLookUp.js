import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Input, Spinner } from './common';

export default class UserLookUp extends Component {
  state = { username: '', searching: false };

  searchUsers(){
    this.setState({searching:true});
    console.log('in search users');
  }

  renderButton(){
    if(this.state.searching){
      return(
          <Spinner size="small" />
      );
    }
    return (
      <Button
        onPress={this.searchUsers.bind(this)}
        title="Search"
      />


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

        <View style={styles.containerStyle}>
          {this.renderButton()}
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
