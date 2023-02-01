import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <form action="" className='signupForm rounded-tl-3xl rounded-br-3xl p-5 my-12'>
        <h1 className='text-center text-2xl font-semibold pb-5'>Signup Here</h1>
        <div className='flex flex-col my-5'>
          <label className='font-semibold' htmlFor="username">Username</label>
          <input type="text" name='username' id='username' required className='border border-blue-300 focus:border-yellow-200 outline-none rounded-md py-1 px-2 md:w-[400px]' />
        </div>
        <div className='flex flex-col my-5'>
          <label className='font-semibold' htmlFor="email">Email Id</label>
          <input type="email" name='email' id='email' required className='border border-blue-300 focus:border-yellow-200 outline-none rounded-md py-1 px-2 md:w-[400px]' />
        </div>
        <div className='flex flex-col my-5'>
          <label className='font-semibold' htmlFor="mobile">Mobile no</label>
          <input type="text" name='mobile' id='mobile' required className='border border-blue-300 focus:border-yellow-200 outline-none rounded-md py-1 px-2 md:w-[400px]' />
        </div>
        <div className='flex flex-col my-5'>
          <label className='font-semibold' htmlFor="dob">Date of Birth</label>
          <input type="date" name='dob' id='dob' required className='border border-blue-300 focus:border-yellow-200 outline-none rounded-md py-1 px-2 md:w-[400px]' />
        </div>
        <div className='flex flex-col my-5'>
          <label className='font-semibold' htmlFor="password">Password</label>
          <input type="password" name='password' id='password' required className='border border-blue-300 focus:border-yellow-200 outline-none rounded-md py-1 px-2 md:w-[400px]' />
        </div>
        <div className='flex flex-col my-5'>
          <label className='font-semibold' htmlFor="cpassword">Confirm Password</label>
          <input type="password" name='cpassword' id='cpassword' required className='border border-blue-300 focus:border-yellow-200 outline-none rounded-md py-1 px-2 md:w-[400px]' />
        </div>
        <div className='flex flex-row justify-center'>
          <button className='bg-cyan-600 text-white text-xl font-semibold w-full py-2 uppercase'>Signup</button>
        </div>
      </form>
    </div>
  )
}

export default Signup