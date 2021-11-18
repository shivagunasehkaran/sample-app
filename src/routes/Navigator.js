import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// presentational component imports
import * as ROUTES from './Routes';
import Login from '../views/Login';

const PublicStack = createStackNavigator();

export const PublicRoutes = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        key={ROUTES.pageNameLogin}
        name={ROUTES.pageNameLogin}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </PublicStack.Navigator>
  );
};