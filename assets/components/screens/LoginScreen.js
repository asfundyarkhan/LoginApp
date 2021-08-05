import React, { useState } from 'react';
import { Text, View ,StyleSheet, TextInput, Pressable, Button} from 'react-native';
import { color } from 'react-native-reanimated';
import styles from '../Styles/styles';
import {sign_In,sign_Up} from  '../Utils/FirebaseUtil';


const LoginScreen =({navigation}) => {
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [firstName , setfirstName] = useState('');
    const [lastName , setlastName] = useState('');
    //sign in or sign up 
    const  [create , setCreate ] = useState(false);
    const signIn = () =>{
        sign_In(email, password).catch((e) => {
        console.log(e)
        alert("Email / Password is wrong");
    });
};     
    const signUp = () =>{
        sign_Up(email, password).catch((e) => {
        console.log(e)
        alert("Something went wrong !!!");
    });
};
    return (
        <View style={styles.container}>
        <View  style={styles.container2}>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} style={styles.emailnputContainer}/>
            <TextInput placeholder="First Name" onChangeText={setfirstName} value={firstName} style={styles.emailnputContainer}/>
            <TextInput placeholder="Last Name" onChangeText={setlastName} value={lastName} style={styles.emailnputContainer}/>
            <TextInput placeholder="******" onChangeText={setPassword} value={password} style={styles.passwordInputContainer} secureTextEntry={true}/>
            <View style={styles.container3}>
            {/* <Pressable onPress={()=>navigation.navigate('Home_Screen')} style={styles.LoginButton}>
                <Text >Login!!!</Text>
            </Pressable>
            <Pressable style={styles.signUpButton}>
                <Text >SignUP</Text>
            </Pressable> */}
                {create ?( <>
                    <Button title ="Sign Up " onPress ={ ()=> signUp()}/>
                   <Text style={styles.Button1} onPress ={ ()=> setCreate(false)}>Sign IN </Text>
                </> ):( <>
                   <Button title ="Sign In " onPress ={ ()=> signIn()}/>
                   <Text style={styles.Button1} onPress ={ ()=> setCreate(true)}>Create An Account  </Text>
                   </>
                )} 
            </View>
        </View>
        </View>
    );
};

  
export default LoginScreen;