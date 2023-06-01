import React, { useEffect, useState } from "react"
import Base from "../Base/Base"
import { useNavigate } from "react-router-dom"
import { Button, Paper, Typography } from "@mui/material";
const Dashboard = () =>{
    const [notes, setNotes] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login", {replace:true})
        }
        let token = localStorage.getItem("token")
        const fetchAllData = async()=>{
         const res = await fetch(`http://localhost:7070/api/notes/all`, {
            method:"GET",
            headers:{
                "x-auth-token" : token
            }
         });
         const data = await res.json()
            if(!data.data) {
            setError(data.message)
            
         }
         setNotes(data.data)
         console.log(notes)
        }
        fetchAllData()
    }, [])
    return (
        <Base>
        {notes && (
             <div>
                {notes?.map((data, index)=>(
                   <Paper 
                   elevation={6}
                   key={data._id}
                   >
                     <p>company name : {data.companyName}</p>
                     <p>date : {data.date}</p>
                     <p>location : {data.location}</p>
                     <p>poistion : {data.poistion}</p>
                     <p>questions : {data.questions}</p>
                     <p>package : {data.package}</p>
                     <p>skills : {data.skills}</p>
                     <p>posted by: {data.user.name}</p>
                   </Paper>
                ))}
             </div>
        )}
    

 {error? 
        <Typography color={"danger"}>
           {error}
        </Typography> : "" }
        </Base>
    )
}

export default Dashboard