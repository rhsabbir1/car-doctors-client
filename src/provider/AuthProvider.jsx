import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContex = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)
    const [loader , setLoader] = useState(true)

    const creatUser = (email , password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth , email, password)
    }

    const authInfo = {
        user, 
        loader,
        creatUser
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;