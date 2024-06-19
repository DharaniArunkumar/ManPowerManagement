import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './Auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[message,setMessage]=useState('')
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3001/users/get/${email}`)
      .then(res =>{ console.log(res)
      if(res.data[0] ?.email){
        if(email === 'admin@gmail.com' && password === '12345'){
          auth.login(res.data[0] ?.name)
          navigate('/')
        }
        if(res.data[0] ?.password === password){
          setMessage('')
          alert('Login successfull')
          auth.login(res.data[0] ?.name)
          navigate('/')
        }
        else{
          setMessage("Incorrect password")
        }
      }
      else{
        setMessage('Email not found')
      }}
    )
      .catch(err => console.log(err));
  };

  
  return (
    <div className="login-container">
      <h2 className='text-center'>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">Login</button>
        {message}
      </form>
      <p className="signup-link">Don't have an account? <NavLink to="/signup">Sign Up</NavLink></p>
    </div>
  );
}
