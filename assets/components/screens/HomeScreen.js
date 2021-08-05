import React from 'react';
import { Text, View ,Button} from 'react-native';
import styles from '../Styles/styles';
import { sign_Out } from '../Utils/FirebaseUtil';

const HomeScreen =({navigation}) => {
    const signOut = () => {
        sign_Out().catch((e) => {
            console.log(e)
            alert("Something went wrong !!!");
        });
    };
    return (
        <View style={styles.maincontainer}>
            <Text> HOME </Text>
            <Button onPress={() => signOut()} title= "Logout" />
        </View>        
    );
};

export default HomeScreen;