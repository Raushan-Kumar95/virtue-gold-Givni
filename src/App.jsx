import './App.css'
import Dashboard from './Dashboard'
import Login from './components/Login'
import ProfileDashboard from './components/ProfileDashboard'
import Signup from './components/Signup'
import PaymentGateway from './components/payment/PaymentGateway'
import PaySlipVoucher from './components/payment/PaySlipVoucher'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import EditProfileData from './components/editProfile/EditProfileData'
import UploadImage from './components/editProfile/UploadImage'
import SearchBar from './components/search/SearchBar'
import Client from './components/client/Client'
import Coins from './components/Coins'
import {CURRENT_USER_TYPE, USER_TYPES } from './components/utils/RoleAuth'
import { useEffect } from 'react'
import AuthUser from './components/utils/AuthUser'
import OtpVerification from './components/otp/OtpVerification'






function App() {
  



  return (
    <div className="App">
      <Router>
        <Admin>
        <Admin><Sidebar /></Admin>
        </Admin>
        <div className='flex flex-col justify-between  gap-12'>
          <SearchBar />
          <Routes>
            <Route path='/dashboard' element={<Admin><Dashboard /></Admin>} ></Route>
            <Route path='/profile' element={<Admin><ProfileDashboard /></Admin>} ></Route>
            <Route path='/uploadImage' element={<Admin><UploadImage /></Admin>} ></Route>
            <Route path='/editProfileData' element={<Admin><EditProfileData /></Admin>} ></Route>
            <Route path='payment' element={<Admin><PaymentGateway /></Admin>} ></Route>
            <Route path='/clients' element={<Admin><Client /></Admin>} ></Route>
            <Route path='/coin' element={<Admin><Coins /></Admin>} ></Route>
            <Route path='/bills' element={<Admin><PaySlipVoucher /></Admin>} ></Route>
            <Route path='/' element={<Navigate to="/login" replace={true} />} ></Route>
            <Route path='/signup' element={<Public><Signup /></Public>} ></Route>
            <Route path='/login' element={<Public><Login /></Public>} ></Route>
            <Route path='/otp' element={<Public><OtpVerification /></Public>} ></Route>
            
          </Routes>

        </div>
      </Router>
    </div>
  )

}

function Public({ children }) {

  if (CURRENT_USER_TYPE === USER_TYPES.PUBLIC || CURRENT_USER_TYPE === USER_TYPES.ADMIN) {
    return <div>{children}</div>
  } else {
    return <div className='ml-96 text-red-900'>You do not have access to this project</div>
  }
}

function Admin({children}) {
   const {user} =AuthUser();
  if(CURRENT_USER_TYPE === USER_TYPES.ADMIN || user===USER_TYPES.USER )
  {
    // window.location.reload();
    return <div>{children}</div>
  }else{
    // window.location.reload();
    return null
  }

}

export default App
