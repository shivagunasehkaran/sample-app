import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// presentational component imports
import * as ROUTES from './Routes';
import Login from '../views/Login';
import Dashboard from '../views/Dashboard';
import Chats from '../views/Chats';
import Settings from '../views/Settings';
import Profile from '../views/Profile';
import { ColourPalette } from '../assets/style/ColourPalette';

// authentication flag
const isAuthenticatedUser = false;

const Stack = createStackNavigator();
const PrimaryTab = createBottomTabNavigator();

// bottom tabs
const BottomTabs = () => {
  return (
    <PrimaryTab.Navigator
      initialRouteName={ROUTES.pageNameDashboard}
      tabBarOptions={{
        activeTintColor: ColourPalette.blue,
        inactiveTintColor: ColourPalette.gray,
        style: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          shadowColor: ColourPalette.blue,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.29,
          shadowRadius: 4,
        },
      }}>
      <PrimaryTab.Screen
        key={ROUTES.pageNameDashboard}
        name={ROUTES.pageNameDashboard}
        component={Dashboard}
        options={{
          title: 'Dashboard',
          headerShown: false,
        }}
      />
      <PrimaryTab.Screen
        key={ROUTES.pageNameChats}
        name={ROUTES.pageNameChats}
        component={Chats}
        options={{
          title: 'Chats',
          headerShown: false,
        }}
      />
      <PrimaryTab.Screen
        key={ROUTES.pageNameSettings}
        name={ROUTES.pageNameSettings}
        component={Settings}
        options={{
          title: 'Settings',
          headerShown: false,
        }}
      />
      <PrimaryTab.Screen
        key={ROUTES.pageNameProfile}
        name={ROUTES.pageNameProfile}
        component={Profile}
        options={{
          title: 'Profile',
          headerShown: false,
        }}
      />
    </PrimaryTab.Navigator>
  );
};

export const PublicRoutes = () => {
  return (
    <Stack.Navigator>
      {
        !isAuthenticatedUser ? (
        <Stack.Screen
          key={ROUTES.pageNameDashboard}
          name={ROUTES.pageNameDashboard}
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />) : (<Stack.Screen
          key={ROUTES.pageNameLogin}
          name={ROUTES.pageNameLogin}
          component={Login}
          options={{
            headerShown: false,
          }}
        />)
      }
    </Stack.Navigator>
  );
};