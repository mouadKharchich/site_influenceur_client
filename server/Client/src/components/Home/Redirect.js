import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Redirect() {
 const navigate=useNavigate();

  useEffect(()=>{
     navigate("/home")
  },[])
  

  return (
    <div>Redirect</div>
  )
}

export default Redirect