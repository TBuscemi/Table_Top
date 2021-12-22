import React, {useRef, useState} from 'react'
import { useAuth, setToken } from './Context/FBContext';
import { addDoc, collection, getDocs, setDoc, doc } from "firebase/firestore";
import {  db } from './misc/firebase'

const FBRegister = () => {

    const [userName, setUserName]=useState('')
    const emailRef = useRef();
    const passwordRef =useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError]= useState('');
    const [isLoading, setIsLoading]= useState(false);

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError ("Passwords do not match.")
        }
        try{
            setError('')
            setIsLoading(true)
            let result = await signup(emailRef.current.value, passwordRef.current.value)
            let id = result.user.uid;
            let name = userName
            createNewUser(name, id)
            setToken();
        }
        catch{
            setError("Failed to create an account.")
        }
        setIsLoading(false)
    }

    const createNewUser=async(name, id )=>{
        await setDoc(doc(db, "Users", id ),{
            name: name,
            user: id,
        }) 
    }

    return (
        <div>
            <h1 className="form-title">Register</h1>
            <form onSubmit={handleSubmit}>

                <label className="reg-label">User Name</label>
                <input className="reg-input" type="text" onChange={e=>setUserName(e.currentTarget.value)} required></input>

                <label className="reg-label">Email</label>
                <input className="reg-input" type="email" ref={emailRef} required></input>
                
                <label className="reg-label">Password</label>
                <input className="reg-input" type="password" ref={passwordRef} required></input>
                
                <label className="reg-label">Confirm Password</label>
                <input className="reg-input" type="password" ref={passwordConfirmRef} required></input>
            
                <button type='submit' disabled={isLoading}>Register</button>
            </form>
        </div>
    )
}

export default FBRegister
