import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView, View} from 'react-native';
import ChatRoomDetail from './ChatRoomDetail';
import { Button } from './common';

export default class HomePage extends Component {

  static navigationOptions = {
    title: 'Chats',
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

        <View style={styles.containerStyle}>
          <Button onPress= {this.onNewChatPressed.bind(this)}>
            New Chat
          </Button>
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
