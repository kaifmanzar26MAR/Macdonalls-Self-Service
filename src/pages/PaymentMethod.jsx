import React, { useContext, useEffect } from 'react'
import './place.css'
import MyContext from '../Context/MyContext'
import { useNavigate } from 'react-router-dom';
const PaymentMethod = () => {
    const {updatepaymentmethod}=useContext(MyContext);
    const navigate=useNavigate();
    const handleclick=(method)=>{
        updatepaymentmethod(method);
        document.getElementById('spc').style.opacity='0';
        setTimeout(() => {
            navigate('/homeselect');
        }, 700);
    }
    useEffect(()=>{
        const elements=document.getElementsByClassName('paymenue');
        for(var i=0; i<elements.length; i++){
            elements[i].style.opacity='1';
        }
    },[])
  return (
    <>
      <div className="select_place_cont" id='spc'>

        <img src="/image/site_logo.png" alt="" />
        <h2>Select Payment Method</h2>
        <div className="cont paycont" id='cpay'>
            <div className="returnbtn paymenue" onClick={()=>{window.history.back()}}>
                return
            </div>
            <div className="cash paymenue" onClick={()=>handleclick("Cash At Counter")}>
                Cash at counter
            </div>
            <div className="card paymenue" onClick={()=>handleclick("Card/Nets")}>
                card / nets
            </div>
        </div>
      </div>
    </>
  )
}

export default PaymentMethod
