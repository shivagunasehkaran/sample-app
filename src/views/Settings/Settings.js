import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const Settings = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{'Settings!!'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;