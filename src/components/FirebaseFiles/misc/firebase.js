import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import 'firebase/compat/database';
import { initializeApp } from "firebase/app"
import { getFirestore, collection} from "firebase/firestore"


const config={
    apiKey: "AIzaSyAu6gbnypN47cHh5fI2pvkCfk5eiCMbx5w",
    authDomain: "bag-of-holding-30cd3.firebaseapp.com",
    projectId: "bag-of-holding-30cd3",
    storageBucket: "bag-of-holding-30cd3.appspot.com",
    messagingSenderId: "245656537292",
    appId: "1:245656537292:web:645526b94f33d822bf1a69",
    measurementId: "G-GPQVHSXX0X",
    databaseURL: 'https://bag-of-holding-30cd3.firebaseio.com'
}


const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const db = getFirestore(app);


const usersRef = collection(db, 'Users')

export {usersRef}
