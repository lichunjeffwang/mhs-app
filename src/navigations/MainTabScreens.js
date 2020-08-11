import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import { HomeScreen, ProfileScreen, SettingsScreen } from '../screens/OtherScreens';
import BarcodeStackScreens from './BarcodeStackScreens';
import {ProcedureSelection} from '../screens/BarcodeStack';
import { theme } from '../core/theme';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreens = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: theme.colors.surface,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Barcode"
        component={BarcodeStackScreens}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: theme.colors.surface,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="DEBUG"
        component={ProcedureSelection}
        options={{
          tabBarLabel: 'Setting',
          tabBarColor: theme.colors.surface,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: theme.colors.surface,
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default React.memo(MainTabScreens);