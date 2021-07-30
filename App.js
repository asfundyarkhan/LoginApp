import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import styles from './assets/components/Styles/styles';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './assets/components/screens/LoginScreen';
import HomeScreen from './assets/components/screens/HomeScreen';
import Navigator from './assets/components/Navigations/index';


export default function App() {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
};