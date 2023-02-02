import React from 'react'
import goldImg from '../assets/images/goldImg.png'

const Signup = () => {
  return (
    <div className='flex justify-center items-center md:mx-16 mx-5 md:my-16 my-5'>
      <div className=' flex md:flex-row flex-col bg-blue-300 shadow-2xl'>
        
        <div className='md:p-10 p-5 w-[400px]'>
        {/* <div className='flex justify-center'> */}
          <h1 className='text-center text-2xl font-semibold text-gray-600 pb-2'>Signup</h1>
        {/* </div> */}
          <form action="">
            <div className='flex'>
              <i class="fa-solid fa-user bg-white p-2 my-2"></i> <input type="text" name="" id="" placeholder='username' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div className='flex gap-2'>
              <i class="fa-solid fa-envelope bg-white p-2 my-2"></i> <input type="email" name="" id="" placeholder='email' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div className='flex gap-2'>
              <i class="fa-solid fa-mobile bg-white p-2 my-2"></i> <input type="text" name="" id="" placeholder='mobile no' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div className='flex gap-2'>
              <i class="fa-solid fa-calendar-days bg-white p-2 my-2"></i> <input type="date" name="" id="" placeholder='dob' className='w-[95%] py-2 px-3 my-2 text-gray-400 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div className='flex gap-2'>
              <i class="fa-solid fa-lock bg-white p-2 my-2"></i> <input type="password" name="" id="" placeholder='password' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div className='flex gap-2'>
              <i class="fa-solid fa-key bg-white p-2 my-2"></i><input type="password" name="" id="" placeholder='confirm password' className='w-[95%] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none ' />
            </div>
            <button className='bg-green-500 text-white text-xl font-semibold py-2 px-3 my-4 w-full'>SIGNUP</button>

          </form>
        </div>

        <div className='flex justify-center items-center bg-red-400 text-white px-2'>
          <img src={goldImg} alt="goldImg" md:width={150} width={120}  />
          <p className='relative font-bold md:text-5xl text-2xl rotate-90 bg-gradient-to-r from-orange-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Virtue Gold</p>
        </div>
      </div>
    </div>
  )
}

export default Signup