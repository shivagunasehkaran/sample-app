import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import * as ROUTES from '../../routes/Routes';
import { styles } from '../Login/Login.style';

const Login = (props) => {
  const [email, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  // onsubmit validation
  const onSubmit = () => {
    const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

    if (!strongRegex.test(email)) {
        Alert.alert('Please fill the email !!!')
        return false;
    } else if (password.length < 8) {
        Alert.alert('Please fill the password !!!')
        return false;
    } else {
        props.navigation.push(ROUTES.pageNameDashboard);
    }
  }

  const doSignUp = () => {
    props.navigation.push(ROUTES.pageNameRegister);
  };

  return (
  <SafeAreaView>
    <View style={styles.container}>
      <TextInput
        style={styles.email}
        onChangeText={(email) => onChangeUsername(email)}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.password}
        onChangeText={(password) => onChangePassword(password)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.submit} onPress={onSubmit}>
        <Text style={styles.submitText}>{'Submit'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signup} onPress={doSignUp}>
        <Text style={styles.signUpText}>{'Sign Up'}</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
};

export default Login;