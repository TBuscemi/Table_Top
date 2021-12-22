import React, {createContext, useContext, useState, useEffect} from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';
import {auth} from '../misc/firebase'
import firebase from 'firebase/compat/app';

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export const setToken=()=>{
    firebase.auth().currentUser.getIdToken(true).then(function(token) {
        localStorage.setItem('token', token);
      }).catch(function(error) {
        console.log(error)
      });
}

export function AuthProvider ({children}){
    const [currentUser, setCurrentUser]= useState();
    const [isLoading, setIsLoading]=useState(false);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setIsLoading(false)
        })
        return unsubscribe
      }, [])

    function signup(email, password){
        return createUserWithEmailAndPassword(getAuth(), email, password)
    }

    const loginWithProvider=(provider)=>{
        return auth.signInWithPopup(provider)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
      }
    
      function logout() {
        return auth.signOut()
      }
    
      function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
      }
    
      function updateEmail(email) {
        return currentUser.updateEmail(email)
      }
    
      function updatePassword(password) {
        return currentUser.updatePassword(password)
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