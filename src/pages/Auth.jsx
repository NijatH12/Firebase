import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";
import { useNavigate} from "react-router-dom";
const provider = new GoogleAuthProvider();
function Auth() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("")
  const register=async ()=>{
    try {
      const user= (await createUserWithEmailAndPassword(auth, email, password)).user
    if(user){
      toast.success("Create a new member")
      setEmail("")
      setPassword("")
      navigate("/home")
    } 
    } catch (error) {
   toast.error(error.message)
    }
  }
const loginwithGoogle=async()=>{
  try {
const user=await signInWithPopup(auth,provider)
if(user){
  navigate("/home")
}

  } catch (error) {
    toast.error(error.message)
  }
}
  const login= async ()=>{
    try {
      const user= (await signInWithEmailAndPassword(auth, email, password)).user
      if(user){
        navigate("/")
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="auth">
      <h3>Sign up / Sign in</h3>
      <div>
        <p>Email:</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="mail"
        />
      </div>
      <div>
        <p>Password:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div style={{ display: "flex",gap:"20px" }}>
          <button style={{ width: "70px" }} onClick={login}>
            Sign in
          </button>
          <button  onClick={register} style={{ width: "70px" }}>
            Sign up
          </button>
        </div>
        <button onClick={loginwithGoogle}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            backgroundColor: "brown",
            justifyContent:"center"
          }}
        >
          <FaGoogle />
          Sign with Google
        </button>
      </div>
    </div>
  );
}

export default Auth;
