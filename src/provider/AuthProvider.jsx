import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContex = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const creatUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loader,
        creatUser,
        singIn,
        logOut
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;