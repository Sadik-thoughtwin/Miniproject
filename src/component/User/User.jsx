import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
 
 function User() {
   const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("token")){
      navigate("/user")
    }
  },[])
   return (
     <div>
       user
     </div>
   )
 }
 
 export default User
 
