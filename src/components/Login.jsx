import React, {useState} from 'react'
import Axios from 'axios' 
import goldImg from '../assets/images/goldImg.png'
import vietue_logo_2 from '../../public/vietue_logo_2.png'
import { Link, useNavigate } from 'react-router-dom'
import {CURRENT_USER_TYPE, USER_TYPES } from './utils/RoleAuth'




const Login = () => {

  const navigate = useNavigate()
  const URL = "https://reqres.in/api/login"
  const [data, setData] = useState({
    email: '',
    password: '',
  })


  const handleData = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value;
    setData(newData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data, 24);

    Axios.post(URL, data).then(res => {
      console.log(res.data.token, 32);
      if(res.data){
        sessionStorage.setItem("token" , JSON.stringify(res.data.token))
        navigate('/dashboard')
      }
      // errorMessage(res.data);
    }).catch(err => { console.log('Not Connected to Database'); })
  }

  const errorMessage = (error) => {
    if (error) {
      toast.success('Signup successfully!', {
        position: "top-right"
      });
    } else {
      toast.error('Fill all Details!', {
        position: "top-right"
      });
    }
  }


  return (
    <div className='flex justify-center items-center'>
      <div className=' flex md:flex-row flex-col bg-blue-300 shadow-2xl'>

        <div className=' bg-red-400 text-white px-8 py-14 md:block hidden'>
          <img src={vietue_logo_2} width={150} alt="vietue_logo_2" className='pb-2' />
          <img src={goldImg} alt="goldImg" width={200} />
        </div>

        <div className='md:px-10 py-[22%] p-5 w-[400px]'>
          <h1 className='text-center text-2xl font-semibold text-gray-600 pb-2'>Login</h1>

          <form  onSubmit={handleSubmit}>

            <div className='flex gap-2'>
              <i class="fa-solid fa-envelope bg-white p-3 my-[9px]"></i> <input value={data.email} onChange={handleData} name="" id="email" placeholder='email' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>

            <div className='flex gap-2'>
              <i class="fa-solid fa-lock bg-white p-3 my-[9px]"></i> <input value={data.password} onChange={handleData} name="" id="password" placeholder='password' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>

            <button className='bg-cyan-700 text-white text-xl font-semibold py-2 px-3 my-4 w-full'>Login</button>
            <p className='text-gray-600 font-semibold'>Create Account - <Link to='/signup' className='text-purple-800'>Signup</Link></p>  

          </form>
        </div>


      </div>
    </div>
  )
}

export default Login