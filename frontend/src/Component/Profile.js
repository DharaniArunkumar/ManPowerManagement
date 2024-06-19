


import React, { useState,useEffect } from 'react'
import { useAuth } from './Auth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
  const auth = useAuth()
  const[data,setData]=useState([])
  const [userData,setUser] = useState({})
  const navigate=useNavigate()
  const handleLogout=()=>{
    auth.logout()
    navigate('/')
  }

  useEffect(()=>{
    axios.get('http://localhost:3001/users/get/:email')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  })


  useEffect(()=>{
    if (data.length > 0 && auth.userId) {
      const userData = data.find(x => x.id === auth.userId);
      if (userData) {
        setUser(userData);
      }
    }
  },[data,auth.userId])
  return (
    <div>
      {/* {saveData.email}  -  {saveData.status} */}
      {userData.cname} - {userData.status}
      <ul>
        <li>ID: {userData.id}</li>
         <li>Company Name: {userData.Cname}</li>
         <li>Email: {userData.email}</li>
         <li>Phone: {userData.number}</li>
         <li>Manpower: {userData.person}</li>        
         <li>Description: {userData.description}</li>         
         <li>Date: {userData.date}</li>
         <li>Time:{userData.time}</li>         
         <li>Status:{userData.status}</li>      
          </ul>
          <button onClick={handleLogout}>Logout</button>
    </div>
    
  )
}
export default Profile;