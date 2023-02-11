import Axios from 'axios';
import React from 'react'
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import coin from '../../assets/images/coin.png'
import otp from '../../assets/images/otp.png'



const OtpVerification = (props) => {

  // const user = useContext(UserContext);
  const navigate = useNavigate()

  const [otpInput, SetOtpInput] = useState('')

  const URL2 = "http://192.168.1.15:5000/verify-otp"

  const handlesubmit = () => {

    Axios.post(URL2, {
      email: props.email,
      otpInput: parseInt(otpInput)
    }).then(
      navigate('/login')
    )
  }

  // alert('otp send')

  console.log(otpInput, typeof otpInput)

  return (
    <div className='flex justify-center items-center'>
      <div className=' flex md:flex-row flex-col bg-blue-300 shadow-2xl rounded-md'>

        <div className=' bg-red-400 text-white px-8 py-14 md:block hidden rounded-md'>
          <img className='mix-blend-multiply' src={coin} alt="goldImg" width={200} />
        </div>

        <div className='md:px-10 py-[10%] p-5 w-[400px]'>
          <h1 className='text-center text-2xl font-semibold text-gray-600 pb-2'>Enter OTP here</h1>

          <form>
            <div className='flex gap-2 items-center'>
            <img src={otp} alt="otp" className=' h-[41px] bg-white p-2'/> <input type="text" placeholder='Enter otp' value={otpInput} onChange={(e) => SetOtpInput(e.target.value)} className='w-[90%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <button onClick={handlesubmit} className='bg-cyan-600 hover:bg-cyan-700 text-white text-xl font-semibold py-2 px-3 my-4 w-full hover:duration-300 hover:shadow-lg'>Verify OTP</button>


          </form>
        </div>


      </div>
    </div>
  )
}

export default OtpVerification