import React, { useState } from "react"
import Base from "../Base/Base"
import { Button, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
const LoginPage = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

const handleLogin = async ()=>{
    const userDetails = {
        email,
        password
    }
   const response = await fetch(`http://localhost:7070/api/user/login`,{
    method : "POST",
    body:JSON.stringify(userDetails),
    headers:{
        "Content-type":"application/json"
        
    }
   }); 

   const data = await response.json()
   if(data.token) {
       setError("")
      localStorage.setItem("token", data.token)
      navigate("/")
     }else {
      setError(data.message)
     }
   }
   
    return (
        <Base>
        <TextField label="email" variant="outlined" fullWidth sx={{ m: 1 }}
        placeholder="Enter the email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        type="email"
        />
        <TextField label="password" variant="outlined" fullWidth sx={{ m: 1 }}
        placeholder="Enter the password"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <Button
        type="submit"
        variant ="contained"
        onClick={handleLogin}
        >Login</Button>
 {error? 
        <Typography color={"danger"}>
           {error}
        </Typography> : "" }
        </Base>
       
    )
}

export default LoginPage