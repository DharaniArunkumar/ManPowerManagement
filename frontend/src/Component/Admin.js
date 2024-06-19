// Admin.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'


export default function Admin() {
  const [list, setList] = useState([]);
  const auth=useAuth()
  const navigate=useNavigate()
  const handleLogout=()=>{
    auth.logout()
    navigate('/')
  }
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = () => {
    axios.get("http://localhost:3001/users/get")
      .then(res => setList(res.data))
      .catch(err => console.log(err));
  };

  const handleAccept = (appointment) => {
    const updatedAppointment = { ...appointment, status: 'Confirmed' };
    updateAppointment(updatedAppointment);
  };

  const handleReject = (appointment) => {
    const updatedAppointment = { ...appointment, status: 'Rejected' };
    updateAppointment(updatedAppointment);
  };

  const updateAppointment = (updatedAppointment) => {
    axios.put(`http://localhost:3001/users/${updatedAppointment.id}`, updatedAppointment)
      .then(res => {
        console.log(`Appointment ${updatedAppointment.id} updated successfully`);
        updateAppointmentInList(updatedAppointment);
      })
      .catch(err => {
        console.log('Error updating appointment:', err);
      });
  };

  const updateAppointmentInList = (updatedAppointment) => {
    setList(prevList => prevList.map(item => (item.id === updatedAppointment.id ? updatedAppointment : item)));
  };

  const renderButtonOrMessage = (appointment) => {
    if (appointment.status === 'pending') {
      return (
        <>
          <button onClick={() => handleAccept(appointment)}>Accept</button>
          <button onClick={() => handleReject(appointment)}>Reject</button>
        </>
      );
    } else {
      return <span>{appointment.status === 'Confirmed' ? 'Accepted' : 'Rejected'}</span>;
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <table className='admin-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Manpower Needed</th>
            <th>Description</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.cname}</td>
              <td>{appointment.email}</td>
              <td>{appointment.number}</td>
              <td>{appointment.person}</td>
              <td>{appointment.description}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{renderButtonOrMessage(appointment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
