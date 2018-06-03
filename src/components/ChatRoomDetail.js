import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Card, CardSection } from './common/index';

const ChatRoomDetail = ({ username }) => {


  return(
      <Card>
        <CardSection>
            <View style={styles.container}>
              <Text style={styles.textStyle}>{username}</Text>
            </View>
        </CardSection>
      </Card>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    alignSelf: 'center'
  }
});


export default ChatRoomDetail;
