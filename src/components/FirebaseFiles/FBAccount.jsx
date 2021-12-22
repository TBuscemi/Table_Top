import React, {useState, useEffect} from 'react'
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth"
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { db } from './misc/firebase';
import { useAuth } from './Context/FBContext'

const FBAccount = () => {
    
    const [userId, setUserId]=useState('')
    const [addHideShow, setHideShow]=useState(false);
    const [values, setValues]=useState({
        email: '',
        timeZone: '',
        availbleDays01: '',
        availbleDays02: '',
        availbleDays03: '',
    });
    const { currentUser }=useAuth()

    useEffect(() => {
        console.log("Account: ", currentUser)
    }, [])



    const onChange =(event)=>{
        event.preventDefault()
        setValues(()=>({
            ...values,
            [event.target.name]:event.target.value,
        }))
    }

    const onSubmit =(event)=>{
        event.preventDefault();
        setValues(()=>({
            ...values,
            [event.target.name]:event.target.value,
        }))
        makeNewAccount();
    }

    const getUserAccount =async(id, newAccount)=>{
        const docRef = doc(db, "Accounts", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()){
            setDoc(docRef, newAccount, {merge:true})
        }
        else{
            await setDoc(doc(db, "Accounts", id), newAccount)
        }
    }

    const makeNewAccount=async ()=>{
        let id = getAuth().currentUser.uid
        setUserId(id)
        const newAccount = {
            user_id : id,
            email: values.email,
            timeZone: values.timeZone,
            availbleDays01: values.availbleDays01,
            availbleDays02: values.availbleDays02,
            availbleDays03: values.availbleDays03
        }
        getUserAccount(id, newAccount);
    }

    const hideShowOnClick=()=>{
        setHideShow(!addHideShow)
    }

    return (
        <div>
            {currentUser && <h1>Welcome {currentUser.displayName}</h1>}
            <button onClick={hideShowOnClick}>Add Account Details</button>
            {addHideShow ? 
                <form onSubmit={onSubmit}>
                    <label className="account-label">Public Email</label>
                    <input onChange={onChange} class="account-input " placeholder="E-Mail" name="email" value={values.email} type="text" />
                    <input onChange={onChange} class="account-input " placeholder="Time Zone" name="timeZone" value={values.timeZone} type="text" />
                    <select onChange={onChange} class="account-input " name="availbleDays01" value={values.availbleDays01}>
                        <option>---</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </select>
                    <select onChange={onChange} class="account-input " name="availbleDays02" value={values.availbleDays02}>
                        <option>---</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </select>
                    <select onChange={onChange} class="account-input " name="availbleDays03" value={values.availbleDays03}>
                        <option>---</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </select>
                    <button>Submit</button>
                </form>
            :null}
        </div>
    )
}

export default FBAccount
