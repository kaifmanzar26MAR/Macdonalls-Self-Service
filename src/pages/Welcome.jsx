import React from 'react'
import './welcome.css'
import { useNavigate } from 'react-router-dom'
const Welcome = () => {
    const navigate=useNavigate();
    const homeclick=()=>{
        document.getElementById('wt').style.position='relative'
        document.getElementById('wi').style.width='0%'
        document.getElementById('wi').style.height='0%'
        document.getElementById('wi').style.opacity='0';
        document.getElementById('wt').style.bottom="-100%"
        document.getElementById('wt').style.opacity='0'
        setTimeout(() => {
            navigate('/selectplace')
        }, 500);
    }
  return (
    <div className='welcome_container' id='wc' onClick={homeclick}>
      <div className="welcome_img" id='wi'>
        <img id='lap' src="/image/welcome_full.jpg" alt="signature" />
        <img id='mob' src="/image/welcome.png" alt="signature" />
      </div>
      <div className="welcome_text" id='wt'>
        <img src="/image/site_logo.png" alt="mac" />
        <span>Click To Start</span>
      </div>
    </div>
  )
}

export default Welcome
