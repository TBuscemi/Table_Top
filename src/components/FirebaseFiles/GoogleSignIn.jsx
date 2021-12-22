import React from 'react';
import firebase from 'firebase/compat/app';
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from './misc/firebase'

const GoogleSignIn = () => {

    const onClickGoogle=()=>{
        Login();
    }

    const signOutGoogle =()=>{
        firebase.auth().signOut()
    }

    const createNewUser=async(name, id )=>{
        await setDoc(doc(db, "Users", id ),{
            name: name,
            user: id,
        })
    }

    const setToken=()=>{
        firebase.auth().currentUser.getIdToken(true).then(function(token) {
            localStorage.setItem('token', token);
          }).catch(function(error) {
            console.log(error)
          });
    }

    const Login = async()=>{
        try{
            const result = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
            console.log(result.user.uid, result.user.displayName)
            setToken()
            if(result.additionalUserInfo.isNewUser){
                createNewUser(result.user.displayName, result.user.uid);
            }
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <button onClick={onClickGoogle}>Sign In With Google</button>
            <button onClick={signOutGoogle}>Sign Out</button>
        </div>
    )
}

export default GoogleSignIn
