import './App.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  return (
    <div className="App">
      <h1 className='text-blue-800 text-5xl font-bold text-center'>Virtue GOld</h1>
      <Signup/>
      <Login/>
      <Dashboard/>
    </div>
  )
}

export default App
