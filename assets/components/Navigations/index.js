import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import LoadingScreen from '../screens/LodingScreen';
import { LoginContext } from '../Utils/LoginProvider';

const stack = createStackNavigator();
function  Navigator () {
    const {user , isLoading}= useContext(LoginContext);
    return (
     <stack.Navigator>
         {isLoading ?(
         <stack.Screen name="Loading" component={LoadingScreen}/>
         ): user ?(
         <stack.Screen name="Home_Screen" component={HomeScreen}/>
         ) : (
         <stack.Screen name="SignIn" component={LoginScreen}/>
         ) }
     </stack.Navigator>   
    );


};
export default Navigator;