import React, { useState } from 'react';
import { Text, View ,StyleSheet, TextInput, Pressable} from 'react-native';
import { color } from 'react-native-reanimated';
import styles from '../Styles/styles';


const LoginScreen =({navigation}) => {
    const {email, setEmail} = useState('');
    const {password , setPassword} = useState('');
    return (
        <View style={styles.container}>
        <View  style={styles.container2}>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} style={styles.emailnputContainer}/>
            <TextInput placeholder="******" onChangeText={setPassword} value={password} style={styles.passwordInputContainer} secureTextEntry={true}/>
            <View style={styles.container3}>
            <Pressable onPress={()=>navigation.navigate('Home_Screen')} style={styles.LoginButton}>
                <Text >Login!!!</Text>
            </Pressable>
            <Pressable style={styles.signUpButton}>
                <Text >SignUP</Text>
            </Pressable>
            </View>
        </View>
        </View>
    );
};

  
export default LoginScreen;