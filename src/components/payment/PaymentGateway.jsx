import React from 'react'
import logo from '/vietue_logo_2.png'
import phonepe from '../../assets/images/phonepe.png'
import gpay from '../../assets/images/gpay.png'
import visa from '../../assets/images/visa.png'
import paypal from '../../assets/images/paypal.png'
import paytm from '../../assets/images/paytm.png'
import credit from '../../assets/images/credit card.png'
import coin from '../../assets/images/coin.png'

const PaymentGateway = () => {
    return (
        <div className=' flex md:ml-64 sm:ml-0 md:mr-8 md:justify-start justify-center '>
            <div className=' flex md:flex-row flex-col bg-white mb-10  border-2 shadow-sm'>
                <div className=' max-w-[1000px]'>

                    <div className='flex justify-between py-5 px-10'>
                        <h1 className='text-xl font-semibold'>Virtue Gold Pvt Ltd.</h1>
                        <img src={logo} width={100} alt="logo" />
                    </div>
                    <hr className='border-gray-300' />

                    <div className='bg-gray-100 flex md:flex-row flex-col justify-center items-center gap-5 md:px-28 px-5 py-5'>
                        <div className='shadow-sm border bg-white px-5 py-5 md:h-[260px] h-[210px]'>
                            <h5 className='py-2'>How would you like to pay?</h5>

                            <div className='grid grid-cols-3 gap-5'>
                                <img src={phonepe} alt="phonepe" className='border md:px-5 px-2 md:py-7 py-4 shadow-sm rounded-md md:w-24 w-16' />
                                <img src={paytm} alt="paytm" className='border md:px-5 px-2 md:py-5 py-3 shadow-sm rounded-md md:w-24 w-16' />
                                <img src={paypal} alt="paypal" className='border md:px-5 px-2 md:py-7 py-4 shadow-sm rounded-md md:w-24 w-16' />
                                <img src={credit} alt="credit" className='border md:px-5 px-2 md:py-5 py-2 shadow-sm rounded-md md:w-24 w-16' />
                                <img src={gpay} alt="gpay" className='border md:px-5 px-3 md:py-2 py-2 shadow-sm rounded-md md:w-24 w-16' />
                                <img src={visa} alt="visa" className='border md:px-5 px-2 md:py-5 py-2 shadow-sm rounded-md md:w-24 w-16' />
                            </div>
                        </div>

                        <div className='shadow-sm border bg-white p-5 my-5 w-80 md:mx-0 mx-10'>
                            <h1 className='font-semibold'>Order Summary</h1>
                            <h2 className='text-sm'>Order Reference: <span> 2154 </span></h2>

                            <div className='flex justify-between my-4'>
                                <div className='flex'>
                                    <img src={coin} width={40} alt="coin" />
                                    <h1 className='my-2'>Product Name</h1>
                                </div>
                                <span className='my-2'>$22.94</span>
                            </div>

                            <div className='flex justify-between text-slate-700'>
                                <h1>Shipping</h1><span>free</span>
                            </div>

                            <div className='flex justify-between text-slate-700'>
                                <h1>Taxes</h1><span>$20</span>
                            </div>
                            <div className='flex justify-between text-slate-700 my-4'>
                                <h1>Total</h1><span>$500</span>
                            </div>

                            <button className='bg-cyan-700 py-2 px-5 text-white font-semibold w-full'>Continue to payment</button>

                            <button className='w-full underline  my-3'>Cancel Payment</button>
                        </div>



                    </div>



                </div>
            </div>
        </div>
    )
}

export default PaymentGateway