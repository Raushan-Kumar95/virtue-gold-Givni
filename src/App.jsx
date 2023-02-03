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


function App() {

  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Login/> */}

      {/* <Dashboard/> */}
      {/* <ProfileDashboard /> */}
      <BrowserRouter>


      <Sidebar />

      <SearchBar />
      {/* <PaySlipVoucher/> */}
      <Routes>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/profile' element={<ProfileDashboard />} ></Route>
        <Route path='/editProfileData' element={<EditProfileData />} ></Route>
        <Route path='/uploadImage' element={<UploadImage />} ></Route>
      </Routes>
     
      </BrowserRouter>
    </div>
  )
}

export default App
