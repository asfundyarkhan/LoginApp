import auth from '@react-native-firebase/auth';

export const sign_In = (email , password) =>{
        return  auth().signInWithEmailAndPassword(email,password);
};

export const sign_Up = (email , password) =>{
        return auth().createUserWithEmailAndPassword(email,password);
};
export const sign_Out = () =>{
        return auth().signOut();
};