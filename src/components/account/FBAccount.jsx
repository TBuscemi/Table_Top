import React, {useState, useEffect} from 'react'
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth"
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../misc/firebase';

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

    useEffect(() => {
        // let token = localStorage.getItem('token')
        // console.log("token:", token)
        // let id = getAuth().currentUser.uid
        // setUserId(id)
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
        makeNewBounty();
    }

    const makeNewBounty=async ()=>{
        const newBounty = {
            user_id : userId,
            email: values.email,
            timeZone: values.timeZone,
            availbleDays01: values.availbleDays01,
            availbleDays02: values.availbleDays02,
            availbleDays03: values.availbleDays03
        }
        const docRef = await addDoc(collection(db, 'Users').doc(`${userId}`).collection('Bounties'),
        {newBounty});
    }

    const hideShowOnClick=()=>{
        setHideShow(!addHideShow)
    }

    return (
        <div>
            <button onClick={hideShowOnClick}>Add Account Details</button>
            {addHideShow ? 
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} class="account-input " placeholder="E-Mail" name="email" value={values.email} type="text">
                        
                    </input>
                    <input onChange={onChange} class="account-input " placeholder="Time Zone" name="timeZome" value={values.timeZone} type="text">

                    </input>
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
