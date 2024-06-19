import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function SignUp() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()

  const handleSubmit=()=>{
    axios.post("http://localhost:3001/users/post",{name,email,password})
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    navigate('/login')
  }
  return (
    <div className="login-container">
      <h2 className='text-center'>SignUp</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Name :</label>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} /><br/>
        <label>Email :</label>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br/>
        <label>Password :</label>
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br/>

        <button className="login-btn" type='submit'>Submit</button>
      </form>
    </div>
  )
}
