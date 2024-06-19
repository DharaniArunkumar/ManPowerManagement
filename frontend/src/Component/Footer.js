import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Images/logof.png'

export default function Footer() {
  return (

    <div className='row footer'>       
        <div className='footer-main col-md-4'>
        <img className="logof" src={logo} style={{width:'80px',height:'70px'}}/>
        <p><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvod5VPpNG-I8n830Vs77S7DIVLGzZHAfZhQrw05E1iw&s' height='30px' width='30px' />10,Varadharajapuram,Cbe-641005</p>
        <p> <img src='https://static.vecteezy.com/system/resources/previews/007/873/184/non_2x/mobile-phone-icon-logo-illustration-suitable-for-web-design-logo-application-free-vector.jpg' height='30px' width='30px' /> +91 7530028565</p>
        <p> <img src='https://static.vecteezy.com/system/resources/previews/003/720/498/original/phone-icon-telephone-icon-symbol-for-app-and-messenger-vector.jpg' height='30px' width='30px' />0422 - 435 0451</p>
        <p><img src='data:image/png;base64,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' height='30px' width='30px' />info@manpower.com</p>
        </div>
    
      <div className='footer-links col-md-4'> 
        <h3>QuickLinks</h3>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>About</NavLink>
        <NavLink to='/'>Service</NavLink>
      </div>

      <div className='footer-button col-md-4'>
        <h2>Subcribe to our Newsletter</h2>
        <p>Get instant updates by subscribing to our Newsletter</p>
        <button className='subcribe-btn'>Subcribe</button>
      </div>

 
    </div>
   
    
//    
  )
}
