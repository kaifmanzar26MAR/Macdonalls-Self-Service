import React, { useContext, useEffect } from 'react'
import './place.css'
import MyContext from '../Context/MyContext';
import { useNavigate } from 'react-router-dom';
const PlaceSelect = () => {
  const navigate=useNavigate();
  const {updateplaceSelect}=useContext(MyContext);
  const clickhanndle=(ele)=>{
    updateplaceSelect(ele);
    document.getElementById('cont_id').style.top='200px';
    document.getElementById('cont_id').style.opacity='0';
    setTimeout(() => {
      navigate('/selectpaymentmethod')
    }, 500);
  }
  useEffect(()=>{
    document.getElementById('cont_id').style.top='0px';
    document.getElementById('cont_id').style.opacity='1';
  },[])
  return (
    <>
      <div className="select_place_cont">
        <img src="/image/site_logo.png" alt="" />
        <h2>Dining Location</h2>
        <div className="cont" id='cont_id'>
            <div className="eat" onClick={()=>clickhanndle('For eat')}>
                <img src="/image/eat.jpg" alt="" />
                <h3>Eat In</h3>
            </div>
            <div className="eat take_away" onClick={()=>clickhanndle('For Take Away')}>
                <img src="/image/take_away.jpg" alt="" />
                <h3>Take Away</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default PlaceSelect
