import React, {useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import { addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";
import { auth, database, db } from './misc/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth"

const GoogleSignIn = () => {

    const [userName, setUserName]=useState('');
    const [id, setId]=useState('')

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
        setUserName('')
        setId('')   
    }

    const setToken=()=>{
        firebase.auth().currentUser.getIdToken(true).then(function(token) {
            localStorage.setItem('token', token);
          }).catch(function(error) {
            console.log(error)
          });
    }

    const Login = async()=>{
        setUserName('')
        setId('')
        try{
            const result = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
            console.log(result.user.uid, result.user.displayName)
            setToken()
            if(result.additionalUserInfo.isNewUser){
                console.log(id);
                console.log(result.additionalUserInfo)
                console.log(result.user)
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
