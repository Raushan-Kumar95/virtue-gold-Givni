import React from 'react'
import goldImg from '../assets/images/goldImg.png'

const Signup = () => {
  return (
    // <div className='md:mx-16 mx-4 md:my-10 my-4'>
    // <div className='flex md:flex-row flex-col justify-between items-center shadow-lg bg-slate-400'>
    //   <div className='signupForm md:p-10 p-4 md:my-12 my-2 bg-white rounded-tr-3xl rounded-br-3xl w-[60%]'>
    //     <form action="" className=''>
    //       {/* <h1 className='text-center text-2xl font-semibold pb-5'>Signup Here</h1> */}
    //       <div className='flex flex-col my-5'>
    //         <input type="text" name='username' id='username' placeholder='Enter username' required className='border border-blue-300 focus:border-yellow-200 outline-none rounded-md py-1 px-2' />
    //       </div>
    //       <div className='flex flex-col my-5'>
    //         <input type="email" name='email' id='email' placeholder='Enter email' required className='border border-blue-300 focus:border-yellow-200 outline-none rounded-md py-1 px-2' />
    //       </div>
    //       <div className='flex flex-col my-5'>
    //         <input type="text" name='mobile' id='mobile' placeholder='Enter mobile' required className='border border-blue-300 focus:border-yellow-200 outline-none rounded-md py-1 px-2' />
    //       </div>
    //       <div className='flex flex-col my-5'>
    //         <input type="date" name='dob' id='dob' placeholder='' required className='border border-blue-300 focus:border-yellow-200 outline-none rounded-md py-1 px-2' />
    //       </div>
    //       <div className='flex flex-col my-5'>
    //         <input type="password" name='password' id='password' placeholder='Enter password' required className='border border-blue-300 focus:border-yellow-200 outline-none rounded-md py-1 px-2' />
    //       </div>
    //       <div className='flex flex-col my-5'>
    //         <input type="password" name='cpassword' id='cpassword' placeholder='Enter Confirm password' required className='border border-blue-300 focus:border-yellow-200 outline-none rounded-md py-1 px-2' />
    //       </div>
    //       <div className='flex flex-row'>
    //         <button className='bg-cyan-600 text-white text-xl font-semibold w-full mx-auto py-2 uppercase'>Signup</button>
    //       </div>
    //     </form>
    //   </div>

    //   <div className='flex justify-end max-w-[55%]'>
    //     <img src={signupImg} alt="singupimg" className='md:w-[500px]' />
    //   </div>
    // </div>
    // </div>

    <div className='flex justify-center items-center mx-16 my-16'>
      <div className=' flex bg-blue-300'>
        <div className='p-10'>
          <form action="">
            <div className=''>
              <input type="text" name="" id="" placeholder='username' className='w-[400px] py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div>
              <input type="email" name="" id="" placeholder='email' className='w-full py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div>
              <input type="text" name="" id="" placeholder='mobile no' className='w-full py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div>
              <input type="date" name="" id="" placeholder='dob' className='w-full py-2 px-3 my-2 text-gray-400 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div>
              <input type="password" name="" id="" placeholder='password' className='w-full py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none' />
            </div>
            <div>
              <input type="password" name="" id="" placeholder='confirm password' className='w-full py-2 px-3 my-2 border border-slate-400 focus:border-red-400 outline-none ' />
            </div>
            <button className='bg-green-500 text-white text-xl font-semibold py-2 px-3 my-4 w-full'>SIGNUP</button>

          </form>
        </div>

        <div className='flex items-center gap-5 bg-red-400 text-white text-3xl p-10'>
            <img src={goldImg} alt="goldImg" width={150} />
            <p className='font-bold text-yellow-400 rotate-90'>Virtue Gold</p>
        </div>
      </div>
    </div>
  )
}

export default Signup