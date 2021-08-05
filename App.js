import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import styles from './assets/components/Styles/styles';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './assets/components/screens/LoginScreen';
import HomeScreen from './assets/components/screens/HomeScreen';
import Navigator from './assets/components/Navigations/index';
import LoadingScreen from './assets/components/screens/LodingScreen';
import LoginProvider from './assets/components/Utils/LoginProvider';




export default function App() {
  return (
    // <NavigationContainer>
    //   <Navigator/>
    // </NavigationContainer>
    <View style={styles.mainContainer}> 
      <LoginProvider>
        <Navigator/>
      </LoginProvider>
    </View>
  );
};