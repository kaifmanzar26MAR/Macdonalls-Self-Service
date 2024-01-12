import React from 'react'
import Welcome from './pages/welcome'
import {Route,Routes} from 'react-router-dom'
import PlaceSelect from './pages/PlaceSelect'
import PaymentMethod from './pages/PaymentMethod'
import HomeSelect from './pages/HomeSelect'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/selectplace' element={<PlaceSelect/>}/>
        <Route path='/selectpaymentmethod' element={<PaymentMethod/>}/>
        <Route path='/homeselect' element={<HomeSelect/>}/>
      </Routes>
    </>
  )
}

export default App
