import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const Chats = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{'Chats!!'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Chats;