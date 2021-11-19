/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './store/store';
import PrimaryContainer from './containers';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PrimaryContainer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
