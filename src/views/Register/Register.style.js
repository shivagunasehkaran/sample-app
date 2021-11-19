import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import { ColourPalette } from '../../assets/style/ColourPalette';

export const styles = StyleSheet.create({
  container: {
    flex:1, 
    marginTop: 20,
    backgroundColor: ColourPalette.white,
  },
  email: {
    height: moderateScale(40),
    marginHorizontal: 30,
    borderWidth: 0.3,
    padding: 10,
  },
  password: {
    height: moderateScale(40),
    marginHorizontal: 30,
    marginTop: 20,
    borderWidth: 0.3,
    padding: 10,
  },
  submit: {
    height: moderateScale(50), 
    marginHorizontal: 30, 
    backgroundColor: ColourPalette.gray, 
    marginTop: 40, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  signup: {
    height: moderateScale(20), 
    marginHorizontal: 30, 
    marginTop: 10, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  submitText: {
    color: ColourPalette.black,
    fontSize: 15 
  },
  signUpText: {
    color: ColourPalette.blue,
    fontSize: 13,
    textDecorationLine: 'underline',
  }
});