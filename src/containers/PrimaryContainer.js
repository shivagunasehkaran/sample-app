import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
// route imports
import * as NAV_ROUTES from '../routes/Routes';
import * as NAVIGATION from '../routes/Navigator';
// base stack
const Stack = createStackNavigator();

const PrimaryContainer = props => {
  // fetch redux values
  const isAuthenticatedUser = useSelector(
    state => state.reducer.loginDetails.isAuthenticatedUser,
  );
  
  return (
    <Stack.Navigator>
      {!isAuthenticatedUser ? (
        <Stack.Screen
          options={{headerShown: false}}
          key={NAV_ROUTES.pageNamePublicStack}
          name={NAV_ROUTES.pageNamePublicStack}
          component={NAVIGATION.PublicRoutes}
        />
      ) : (
        <Stack.Screen
          options={{headerShown: false}}
          key={NAV_ROUTES.pageNamePrivateStack}
          name={NAV_ROUTES.pageNamePrivateStack}
          component={NAVIGATION.PrivateRoutes}
        />
      )}
    </Stack.Navigator>
  );
};

export default PrimaryContainer;
