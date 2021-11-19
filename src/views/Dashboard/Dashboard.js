import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
  NativeModules
} from 'react-native';
import { useDispatch } from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import { saveLoginDetails } from '../../actions/action';
import { ColourPalette } from '../../assets/style/ColourPalette';

const Dashboard = (props) => {

  // redux dispatch 
  const dispatch = useDispatch();
  
  // render native android component
  const handleAndroidNativeCall = () => {
    NativeModules.ActivityStarter.showToast();
  };

  // get value from native iOS
  const handleiOSNativeCall = () => {
    NativeModules.ActivityStarter.callNativeFunction((error, events) => {
      Alert.alert(events.value);
    });
  };

  // Logout action
  const doLogout = () => {
     // dispatch redux actions
     dispatch(saveLoginDetails('', '', false));
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>{'Dashboard!!'}</Text>
      {
        Platform.OS === 'ios' ? (
          <TouchableOpacity style={styles.platformButton} onPress={handleiOSNativeCall}>
            <Text>{'iOS Bridging'}</Text>
          </TouchableOpacity>
        ) : <TouchableOpacity style={styles.platformButton} onPress={handleAndroidNativeCall}>
              <Text style={styles.text}>{'Android Bridging'}</Text>
            </TouchableOpacity>
      }
        <TouchableOpacity style={styles.logout} onPress={doLogout}>
          <Text style={styles.text}>{'Logout'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  platformButton: {
    height: moderateScale(30),
    width: moderateScale(150),
    marginHorizontal: 100,
    backgroundColor: ColourPalette.gray,
    marginTop: 50, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  logout: {
    height: moderateScale(50),
    width: moderateScale(200),
    marginHorizontal: 100,
    backgroundColor: ColourPalette.gray,
    marginTop: 200, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  text: {
    color: ColourPalette.black,
    fontSize: 12
  }
});

export default Dashboard;