import React, {useState} from "react";
import { useAuth } from "../FirebaseFiles/Context/FBContext"

export default function FBLogout(){

    const [error, setError]=useState('')

    const { logout } = useAuth()

    async function handleLogout() {
        setError("")
        try {
          await logout()
          localStorage.removeItem('token')
        } catch {
          setError("Failed to log out")
        }
      }

      return(
          <button onClick={handleLogout}>Logout</button>
      )
}