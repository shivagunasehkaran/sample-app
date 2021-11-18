import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const Profile = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{'Profile!!'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;