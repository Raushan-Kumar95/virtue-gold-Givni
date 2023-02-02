import './App.css'
import Dashboard from './Dashboard'
import Login from './components/Login'
import ProfileDashboard from './components/ProfileDashboard'
import Signup from './components/Signup'

function App() {

  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Login/> */}
      <Dashboard/>
      <ProfileDashboard />
    </div>
  )
}

export default App
