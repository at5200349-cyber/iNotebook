import React from 'react'
import { useState,useEffect } from 'react'
import Addnotes from './Addnotes'   

import { useContext } from 'react'
import notecontext from '../context/notes/Notecontext'

const Dashboard = () => {
    const { fetchNotes}=useContext(notecontext);
    const [userData, setUserData] = useState(null);
    const getUser=async()=>{
        const response=await fetch("http://localhost:5000/api/auth/getuser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "auth-token":localStorage.getItem("token")
            }
        })
        const json=await response.json();
        setUserData(json);
    }
    useEffect(() => {
        getUser();
        fetchNotes();
    }, []);
  return (
  <>  
  <div>
      {userData && (
        <h1>
          Welcome, {userData.name} 👋
        </h1>
      )}
    </div>
 <Addnotes/>


  </>
  )
}

export default Dashboard
