// MyContextProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext';

const MyContextProvider = ({ children }) => {
  //setting place
  const [placeSelect, setPlaceSelect] = useState('');
  const updateplaceSelect = (newState) => {
    setPlaceSelect(newState);
  };

  //setting payment method
  const [paymentMethod,setPaymentMethod]=useState('');
  const updatepaymentmethod=(method)=>{
    setPaymentMethod(method);
    console.log(method);
  }



  return (
    <MyContext.Provider value={{ 
        placeSelect, 
        updateplaceSelect,
        paymentMethod,
        updatepaymentmethod,
        }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
