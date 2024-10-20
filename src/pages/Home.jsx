import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase';
function Home() {
  const [user,setUser]=useState("")
 const getUserInfo=()=>{
  onAuthStateChanged(auth, (userCredential) => {
    if (userCredential) {
   setUser(userCredential.email)
    } 
  });
 }
 useEffect(()=>{
  getUserInfo()
 })
  return (
    <div className='a'>Hello {user}</div>
  )
}

export default Home