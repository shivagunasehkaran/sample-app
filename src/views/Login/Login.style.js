import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import { ColourPalette } from '../../assets/style/ColourPalette';

export const styles = StyleSheet.create({
  container: {
    flex:1, 
    marginTop: 100,
    backgroundColor: ColourPalette.white,
  },
  username: {
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
  text: {
    color: ColourPalette.black,
    fontSize: 15 
  }
});