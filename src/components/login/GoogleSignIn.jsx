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

    const signIn = async()=>{
        try{
            const {additionalUserInfo, user} = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
            if(additionalUserInfo.isNewUser){
                console.log(additionalUserInfo)
                setUserName(user.name);
                setId(user.id);
                // await db.collection('Users').doc(`${user.uid}`).set(data);
                const docRef = await addDoc(collection(db, "Users"),{
                    name: userName,
                    user_id: id
                });
                console.log( "Doc: ", docRef)
            }
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <button onClick={onClickGoogle}>Sign In With Google</button>
        </div>
    )
}

export default GoogleSignIn
