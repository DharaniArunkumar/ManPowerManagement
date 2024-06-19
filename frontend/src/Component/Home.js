import React from 'react'
import Image from '../Images/image.jpeg'


export default function Home() {
  return (
    <div >
        <img className='image' alt='' src={Image}/>
        <div className='content'>
            <h1 className='simple'>"Simplifying workforce management for businesses with<br></br> intuitive tools and quality talent connections"</h1>
            <h5 className='join'>Join us to streamline recruitment, optimize scheduling, and make <br></br>informed HR decisions with actionable insights</h5>
            <button className='btnJoin'>Join Us</button>
        </div>
        
    </div>
  )
}
 