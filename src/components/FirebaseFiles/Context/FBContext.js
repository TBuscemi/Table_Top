import React, {createContext, useContext, useState, useEffect} from 'react'
import { getAuth } from "firebase/auth"
import {auth} from '../misc/firebase'

const AuthContext = () => ({
    currentUser: null,
    signInWithGoogle: ()=>Promise,
    login: ()=>Promise,
    signup: ()=>Promise,
    logout: ()=>Promise,
})

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider ({children}){
    const [currentUser, setCurrentUser]= useState(null);
    const [isLoading, setIsLoading]=useState(false);
    const getAuth = getAuth();
    
    useEffect(()=>{
        const unsub = auth.onAuthStateChanged(getAuth, user =>{
            setCurrentUser(user ? user:null)
            setIsLoading(false)
        })
        return()=>{ unsub()}
    },[])

    const signup=(email, password)=>{
        return auth.createUserWithEmailAndPassword(getAuth, email, password)
    }

    const login=(email, password)=>{
        return auth.signInWithEmailAndPassword(getAuth, email, password)
    }

    const logout=()=>{
        return auth.signOut(getAuth)
    }

    const loginWithProvider=(provider)=>{
        return auth.signInWithPopup(getAuth, provider)
    }

    const resetPassword=(email)=>{
        return auth.sendPasswordResetEmail(email)
    }

    const updatePassword=(password)=>{
        return currentUser.updatePassword(password)
    }

    const updateEmail=(email)=>{
        return currentUser.updateEmail(email)
    }

    const value ={
        currentUser, 
        loginWithProvider,
        login,
        signup,
        logout,
        resetPassword,
        updatePassword,
        updateEmail,
    }

    return(
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}