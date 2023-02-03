import React from 'react'

const PaySlipVoucher = () => {
    return (
        // <div className=' absolute left-28'>
        //     <div className='bg-gray-400 max-w-[500px]'>
        //         <div className='flex flex-row justify-between'>
        //             <h2>Virtue Gold pvt ltd</h2>
        //             <h3>RECEIPT</h3>
        //         </div>
        //     </div>
        // </div>

        <div className='absolute flex justify-center items-center md:mx-96 mx-5 md:my-16 my-5'>
      <div className=' flex md:flex-row flex-col bg-blue-300 shadow-2xl'>
        <div className='md:p-10 p-5 w-[800px]'>
        <div className='flex flex-row justify-between'>
            <h2 className='text-white text-3xl'>Virtue Gold pvt ltd</h2>
            <h3>RECEIPT</h3>
        </div>

        </div>
      </div>
    </div>
    )
}

export default PaySlipVoucher