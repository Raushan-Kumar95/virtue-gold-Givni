import './App.css'
// import Dashboard from './Dashboard'
// import Login from './components/Login'
import ProfileDashboard from './components/ProfileDashboard'
import Signup from './components/Signup'
import PaySlipVoucher from './components/PaySlipVoucher'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'


function App() {

  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Login/> */}
      <PaySlipVoucher/>
      {/* <Dashboard/> */}
      {/* <ProfileDashboard /> */}
      <BrowserRouter>


      <Sidebar />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <Routes>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/profile' element={<ProfileDashboard />} ></Route>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
