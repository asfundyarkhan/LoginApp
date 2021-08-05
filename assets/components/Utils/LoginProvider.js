import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';

const props = {
    children:React.ReactReactNode
}
const ContextType = {
    user : FirebaseAuthTypes.User | null ,
    isLoading: boolean

}

export const LoginContext = React.createContext(ContextType);

const LoginProvider = (prop={props}) => {
    const [user , setUser]= useState<FirebaseAuthTypes.User | null>null();
    const [ isLoading , setIsLoading]= useState<boolean>(true);

    const onAuthStateChanged=( user = [FirebaseAuthTypes.User | null ])=>{
        setUser(user);
        setIsLoading(false);
    }

    useEffect(()=>{
        const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
        return subscribe;
    
    },[])
    return (
        <LoginContext.Provider value={{user , isLoading}}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;
