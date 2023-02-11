import Axios from 'axios';
import React from 'react'
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";


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
    <div>
        <div>
            <input type="text" placeholder='enter otp' value={otpInput} onChange={(e)=>SetOtpInput(e.target.value)} />
            <button onClick={handlesubmit}>submit otp</button>
        </div>
    </div>
  )
}

export default OtpVerification