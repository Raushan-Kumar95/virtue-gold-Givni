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
import { useEffect } from 'react'




const USER_TYPES = {
  PUBLIC: 'public user',
  ADMIN: 'admin_user'
}

const CURRENT_USER_TYPE = USER_TYPES.ADMIN;

function App() {


  return (
    <div className="App">
      <Router>
        <Public><Sidebar /></Public>
        <div className='flex flex-col justify-between  gap-12'>
          <Public><SearchBar /></Public>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} ></Route>
            <Route path='/profile' element={<ProfileDashboard />} ></Route>
            <Route path='payment' element={<PaymentGateway />} ></Route>
            <Route path='/clients' element={<Client />} ></Route>
            <Route path='/coin' element={<Coins />} ></Route>
            <Route path='/bills' element={<PaySlipVoucher />} ></Route>
            <Route path='/uploadImage' element={<UploadImage />} ></Route>
            <Route path='/editProfileData' element={<EditProfileData />} ></Route>
            {/* <Route path='/' element={<Navigate to="/login" replace={true} />
            } ></Route> */}
            <Route path='/signup' element={<Public><Signup /></Public>} ></Route>
            <Route path='/login' element={<Public><Login /></Public>} ></Route>

          </Routes>

        </div>
      </Router>
    </div>
  )

}

function Public({ children }) {

  if (CURRENT_USER_TYPE = USER_TYPES.PUBLIC) {
    return <>{children}</>
  } else {
    return <div>you do not have access to this project</div>
  }
}

function Admin({children}) {
  if(CURRENT_USER_TYPE = USER_TYPES.ADMIN)
  {
    return <div>{children}</div>
  }
}

export default App
