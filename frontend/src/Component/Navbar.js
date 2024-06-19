import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useAuth } from './Auth';
import logo from '../Images/logof.png'

function CollapsibleExample() {
  const auth = useAuth();
 
  const isAdmin = auth.user === 'admin'

  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Container>
        <img className="logo" src={logo} style={{width:'80px',height:'70px'}}/>
        <Navbar.Brand className='logo1' to="/">anPower</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <nav className="mx-auto nav">
            <NavLink className='navLink' to="/">Home</NavLink>
            <NavLink className='navLink' to="/about">About</NavLink>
            <NavLink className='navLink' to="/service">Services</NavLink>
            
            {auth.user && <NavLink className='navLink' to="/form">Book Service</NavLink>}
            {isAdmin && <NavLink className='navLink' to="/admin">Admin</NavLink>}
            {!auth.user && <NavLink className='navLink' to="/login">Login</NavLink>}
            {auth.user && <NavLink className='navLink' to="/profile">Profile</NavLink>}
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
