import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const Dashboard = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{'Dashboard!!'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;