
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';
import Login from '../screens/Login';

export default createStackNavigator({
  Login,
  Dashboard,
  Settings,
}, {
    initialRouteName: 'Login'
  });