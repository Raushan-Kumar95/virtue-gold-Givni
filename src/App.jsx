import './App.css'
import Dashboard from './Dashboard'
import Login from './components/Login'
import ProfileDashboard from './components/ProfileDashboard'
import Signup from './components/Signup'
import UploadImage from './components/EditProfile/UploadImage'
import EditProfileData from './components/EditProfile/EditProfileData'

function App() {

  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Login/> */}
      <Dashboard/>
      <ProfileDashboard />
      {/* <UploadImage /> */}
      {/* <EditProfileData /> */}
    </div>
  )
}

export default App
