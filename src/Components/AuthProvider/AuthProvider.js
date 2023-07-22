import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged,GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider= new GoogleAuthProvider();
    const auth=getAuth(app)
    
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }  
    
    const createUser=( email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => signOut(auth);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unsubscribe();
    },[])
 const authInfo={createUser,login,user,loading,logOut,googleSignIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;