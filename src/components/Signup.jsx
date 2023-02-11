import React, { useState, createContext, useContext } from 'react'
import Axios from 'axios'
import goldImg from '../assets/images/goldImg.png'
import vietue_logo_2 from '/vietue_logo_2.png'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import OtpVerification from './otp/OtpVerification';

// const UserContext = createContext();

const Signup = () => {
  const navigate = useNavigate()


  const [isOtp, setIsOtp] = useState(false);

  const URL1 = "http://192.168.1.15:5000/signup"
  
  const [data, setData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
  })

  const handleData = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value;
    setData(newData)
    // console.log(newData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    Axios.post(URL1, {
      fullName: data.fullName,
      email: data.email,
      mobile: data.mobile,
      password: data.password,
    }).then(res => {
      console.log(res.data);

      // alert('Successfully Signup!')
      console.log('Data Saved!')

      setIsOtp(true)
    }).catch(err => { err })

   
  }

  

  return   isOtp ? <OtpVerification email={data.email} />  : (
   
    
    <div className='flex justify-center items-center '>
      <div className=' flex md:flex-row flex-col bg-blue-300 shadow-2xl rounded-md'>

        <div className='md:p-10 p-5 w-[400px]'>
          {/* <div className='flex justify-center'> */}
          <h1 className='text-center text-2xl font-semibold text-gray-600 pb-2'>Signup</h1>
          {/* </div> */}
          <form onSubmit={handleSubmit}>
            <div className='flex gap-2'>
              <i class="fa-solid fa-user bg-white p-3 my-[9px]"></i> <input value={data.fullName} onChange={handleData} type="text" name="" id="fullName" placeholder='username' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div className='flex gap-2'>
              <i class="fa-solid fa-envelope bg-white p-3 my-[9px]"></i> <input value={data.email} onChange={handleData} type="email" name="" id="email" placeholder='email' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div className='flex gap-2'>
              <i class="fa-solid fa-mobile bg-white p-3 my-[9px]"></i> <input value={data.mobile} onChange={handleData} type="text" name="" id="mobile" placeholder='mobile no' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            {/* <div className='flex gap-2'>
              <i class="fa-solid fa-calendar-days bg-white p-3 my-[9px]"></i> <input type="date"  name="" id="" placeholder='date of birth'  className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none text-gray-400 hover:text-gray-900 focus:text-gray-900' />
            </div> */}
            <div className='flex gap-2'>
              <i class="fa-solid fa-lock bg-white p-3 my-[9px]"></i> <input value={data.password} onChange={handleData} type="password" name="" id="password" placeholder='password' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div className='flex gap-2'>
              <i class="fa-solid fa-key bg-white p-3 my-[9px]"></i><input type="password" name="" id="" placeholder='confirm password' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none ' />
            </div>
            <button className='bg-green-500 hover:bg-green-600 text-white text-xl font-semibold py-2 px-3 my-4 w-full hover:duration-300 hover:shadow-lg'>SIGNUP</button>
            <p className='text-gray-600 font-semibold'>Already Signup? - <Link to="/login" className='text-purple-800 hover:text-green-800 hover:underline hover:duration-300 hover:drop-shadow-lg hover:scale-110'>Login</Link></p>
          </form>
        </div>

        <div className=' bg-red-400 text-white px-8 py-14 rounded-md md:block hidden'>
          <img src={vietue_logo_2} width={150} alt="vietue_logo_2" className='pb-2' />
          <img src={goldImg} alt="goldImg" width={200} />
        </div>

      </div>
    </div>
  )
}

export default Signup