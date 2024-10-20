import React from 'react'
import { MdExitToApp } from "react-icons/md";
import { IoLogoFirebase } from "react-icons/io5";
import { auth } from '../Firebase';
import {useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
function Navbar() {
  const navigate = useNavigate();
  const exit= ()=>{
    toast.success("Exiting")
    setTimeout(() => {
      signOut(auth)
    navigate("/auth")
    }, 3000);

  }
  return (
    <div className='nav'>
        <div className='left'>Firebase <IoLogoFirebase/></div>
        <div onClick={exit} className='right'>Exit <MdExitToApp /></div>
    </div>
  )
}

export default Navbar