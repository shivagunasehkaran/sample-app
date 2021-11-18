/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PrimaryContainer from './containers';

const App = () => {
  return (
    <NavigationContainer>
      <PrimaryContainer />
    </NavigationContainer>
  );
};

export default App;
