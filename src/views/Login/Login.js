import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const Login = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{'Login!!'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;