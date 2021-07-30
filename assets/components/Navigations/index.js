import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const stack = createStackNavigator();
function  Navigator () {
    return (
     <stack.Navigator>
         <stack.Screen name="Login" component={LoginScreen}/>
         <stack.Screen name="Home_Screen" component={HomeScreen}/>
     </stack.Navigator>   
    );


};
export default Navigator;