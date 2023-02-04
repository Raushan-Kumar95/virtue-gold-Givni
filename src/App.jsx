import './App.css'
// import Dashboard from './Dashboard'
// import Login from './components/Login'
import ProfileDashboard from './components/ProfileDashboard'
import Signup from './components/Signup'
import PaySlipVoucher from './components/PaySlipVoucher'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import EditProfileData from './components/EditProfile/EditProfileData'
import UploadImage from './components/EditProfile/UploadImage'
import SearchBar from './components/search/SearchBar'
import Client from './components/client/Client'


function App() {

  return (
    <div className="App">
     

     
      <BrowserRouter>
        <Sidebar />
        <div className='flex flex-col justify-between  gap-12'>
          <SearchBar />
           <Signup/>
           <Login/>

          <Routes>
            <Route path='/signup' element={<Signup />} ></Route>
            <Route path='/profile' element={<ProfileDashboard />} ></Route>
            <Route path='/clients' element={<Client />} ></Route>
            <Route path='/bills' element={<PaySlipVoucher />} ></Route>
            <Route path='/uploadImage' element={<UploadImage />} ></Route>
            <Route path='/editProfileData' element={<EditProfileData />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/signup' element={<Signup />} ></Route>
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  )

}

export default App
