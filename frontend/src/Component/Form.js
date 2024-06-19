import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './Auth';

export default function Form() {
  const [cname, setCname] = useState('');
  const [number, setNumber] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  
  const [person, setPerson] = useState('');
  const [status, setStatus] = useState("pending");
  const [data, setData] = useState([]);
  const [fetchData, setFetchData] = useState({});
  const auth = useAuth();
  

  useEffect(() => {
    axios.get("http://localhost:3001/users/get/:email")
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

    // useEffect(() => {
    //   const fetchId = Array.isArray(data) ? null : data.find(x => x.id === auth.userId);
    //   if (fetchId) {
    //     setFetchData(fetchId);
    //   }
    // }, [data, auth.userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const fetchId = fetchData.id;
      axios.put(`http://localhost:3001/users/put/:_id`, { ...fetchData, cname, number, description, person, date, status })
      .then(res => { setFetchData(res); })
      .catch(err => { console.log(err); });
  };

  return (
    <div className='form-container'>
      <h2>Appointment Form</h2>
      <form className='userform' onSubmit={handleSubmit}>
        <label className='b-label'>Company Name:</label><br></br>
        <input className='b-input' type='text' value={cname} onChange={(e) => { setCname(e.target.value) }} /><br /><br></br>

        <label className='b-label'>Phone Number:</label><br></br>
        <input className='b-input' type='text' value={number} onChange={(e) => { setNumber(e.target.value) }} /><br /><br></br>

        <label className='b-label'>Description:</label><br></br>
        <input className='b-input' type='text' value={description} onChange={(e) => { setDescription(e.target.value) }} /><br /><br></br>

        <label className='b-label'>No of Persons:</label><br></br>
        <input className='b-input' type='number' value={person} onChange={(e) => { setPerson(e.target.value) }} /><br /><br></br>

        <label className='b-label'>Date:</label><br></br>
        <input className='b-input' type='date' value={date} onChange={(e) => { setDate(e.target.value) }} /><br /><br></br>

       

        <button className='submit-btn' type='submit'>Submit</button>
      </form>
    </div>
  );
}
