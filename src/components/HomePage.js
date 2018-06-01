import React, { Component } from 'react';
import { Text, Button, StyleSheet, ScrollView, View} from 'react-native';
import ChatRoomDetail from './ChatRoomDetail';

export default class HomePage extends Component {

  static navigationOptions = {
    title: 'Home',
    headerLeft: null
  };

  componentWillMount(){
    /*Get all current chat rooms from firebase*/
  }

  onNewChatPressed(){
    /*Search usernames*/
    console.log('test');
    this.props.navigation.navigate('UserLookUp');
  }

  render(){

    var names = ['joshua', 'vinh', 'romnie'];

    return(
      <View>

        <View>
          <ScrollView>
            {
              names.map((item, key)=>(<ChatRoomDetail key={key} username={item}/>))
            }
          </ScrollView>
        </View>

        <View>
          <Button
            onPress= {this.onNewChatPressed.bind(this)}
            title='New Chat'
            color="#841584"
          />
        </View>


      </View>


    );
  }
}
const styles = {
  textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
};
