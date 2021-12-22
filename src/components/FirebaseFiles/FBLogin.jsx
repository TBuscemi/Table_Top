import React, { useRef, useState } from 'react';
import { useAuth } from './Context/FBContext';
import firebase from 'firebase/compat/app';
import GoogleSignIn from './GoogleSignIn';

//Add sign up link
//Add Redirects after logging in
//Check Error handling


const FBLogin =()=>{
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth();
    const [error, setError] = useState('')
    const [isLoading, setIsLoading]= useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        try{
            setIsLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        }
        catch(err){
            setError('Failed to login')
            console.log(err)
        }
        setIsLoading(false)
    }

    return(
        <>
            <h1>Login</h1>
                {error && <span>{error}</span>}
            <form onSubmit={handleSubmit}>
                <label className="login-label">Email</label>
                <input className="login-input" type="email" ref={emailRef} required />
                
                <label className="login-label">Password</label>
                <input className="login-input" type="password" ref={passwordRef} required />

                <button type="submit" disabled={isLoading} className="login-sub-btn">Login</button>
            </form>
            <GoogleSignIn />
            <p>Not a member? Sign up today!</p>
        </>
    )
}

export default FBLogin