import './App.css'
import Dashboard from './Dashboard'
import Login from './components/Login'
import ProfileDashboard from './components/ProfileDashboard'
import Signup from './components/Signup'
import PaymentGateway from './components/payment/PaymentGateway'
import PaySlipVoucher from './components/payment/PaySlipVoucher'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import EditProfileData from './components/editProfile/EditProfileData'
import UploadImage from './components/editProfile/UploadImage'
import SearchBar from './components/search/SearchBar'
import Client from './components/client/Client'
import Coins from './components/Coins'

const USER_TYPES = {
  PUBLIC: 'public user',
  ADMIN: 'admin_user'
}


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className='flex flex-col justify-between  gap-12'>
          <SearchBar />

          <Routes>
            <Route path='/dashboard' element={<Dashboard />} ></Route>
            <Route path='/profile' element={<ProfileDashboard />} ></Route>
            <Route path='payment' element={<PaymentGateway />} ></Route>
            <Route path='/clients' element={<Client />} ></Route>
            <Route path='/coin' element={<Coins />} ></Route>
            <Route path='/bills' element={<PaySlipVoucher />} ></Route>
            <Route path='/uploadImage' element={<UploadImage />} ></Route>
            <Route path='/editProfileData' element={<EditProfileData />} ></Route>
            <Route path='/' element={<Navigate to="/login" replace={true} />
            } ></Route>
            <Route path='/signup' element={<Signup />} ></Route>
            <Route path='/login' element={<Login />} ></Route>

          </Routes>

        </div>
      </BrowserRouter>
    </div>
  )

}

export default App
