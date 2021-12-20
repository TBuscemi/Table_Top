import React, {useState} from 'react';
import firebase from 'firebase/compat/app';
import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, database, db } from '../misc/firebase'

const GoogleSignIn = () => {

    const [userName, setUserName]=useState('');
    const [id, setId]=useState('')

    const onClickGoogle=()=>{
        signIn();
    }

    const signOutGoogle =()=>{
        firebase.auth().signOut()
    }

    const createNewUser=async(name, id )=>{
        console.log( "New User: ", userName)
        const docRef = await addDoc(collection(db, "Users"),{
            name: name,
            user: id,
        });
        
        setUserName('')
        setId('')
        
    }

    const signIn = async()=>{
        setUserName('')
        setId('')
        try{
            const result = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
            console.log(result.user.uid, result.user.displayName)
            let token = result.credential.accessToken;
            localStorage.setItem('token', token);
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
