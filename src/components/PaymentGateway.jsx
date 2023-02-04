import React from 'react'
import logo from '../../public/vietue_logo_2.png'
import phonepe from '../assets/images/phonepe.png'
import gpay from '../assets/images/gpay.png'
import visa from '../assets/images/visa.png'
import paypal from '../assets/images/paypal.png'
import paytm from '../assets/images/paytm.png'
import credit from '../assets/images/credit card.png'

const PaymentGateway = () => {
    return (
        <div className=' flex justify-center items-center '>
            <div className=' flex md:flex-row flex-col bg-white mb-10  border-2 shadow-sm'>
                <div className='md:py-5 w-[1000px] '>

                    <div className='flex justify-between py-5 px-10'>
                        <h1 className='text-xl font-semibold'>Virtue Gold Pvt Ltd.</h1>
                        <img src={logo} width={100} alt="logo" />
                    </div>
                    <hr className='border-gray-300' />

                    <div className='bg-gray-100 flex justify-center gap-5'>
                        <div className='shadow-sm border bg-white p-5 my-5'>
                            <h5 className='py-2'>How would you like to pay?</h5>

                            <div className='grid grid-cols-3 gap-5'>
                                <img src={phonepe} alt="phonepe" width={100} className='border px-5 py-7 shadow-sm rounded-md' />
                                <img src={paytm} alt="paytm" width={100} className='border px-5 py-5 shadow-sm rounded-md' />
                                <img src={paypal} alt="paypal" width={100} className='border px-5 py-7 shadow-sm rounded-md' />
                                <img src={credit} alt="credit" width={100} className='border px-5 py-5 shadow-sm rounded-md' />
                                <img src={gpay} alt="gpay" width={100} className='border px-5 py-3 shadow-sm rounded-md' />
                                <img src={visa} alt="visa" width={100} className='border px-5 py-5 shadow-sm rounded-md' />
                            </div>
                        </div>

                        <div className='shadow-sm border bg-white p-5 my-5'>
                            <h1 className='font-semibold'>Order Summary</h1>
                            <h2 className='text-sm'>Order Reference: <span> 2154 </span></h2>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    )
}

export default PaymentGateway