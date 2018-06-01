import React, { Component } from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';
import ChatRoomDetail from './ChatRoomDetail';

export default class HomePage extends Component {

  static navigationOptions = {
    title: 'Home',
    headerLeft: null
  };

  componentWillMount(){

  }

  render(){

    var names = ['joshua', 'vinh', 'romnie'];

    return(
      <ScrollView>
        {
          names.map((item, key)=>(<ChatRoomDetail key={key} username={item}/>))
        }
      </ScrollView>
    );
  }
}
