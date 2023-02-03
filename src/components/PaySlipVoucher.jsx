import React from 'react'

const PaySlipVoucher = () => {
    return (
        <div className='absolute flex justify-center items-center md:mx-96 mx-5 md:my-16 my-5'>
      <div className=' flex md:flex-row flex-col bg-white shadow-2xl'>
        <div className='md:p-10 p-5 w-[800px]'>
        <div className='flex flex-row justify-between '>
            <h2 className='text-2xl font-bold'>Virtue Gold pvt ltd</h2>
            <h3 className='text-xl font-semibold'>RECEIPT</h3>
        </div>

        <div >
            <table border={2}>
                <tr>
                    <th className='px-7'>Item</th>
                    <th className='px-7'>Description</th>
                    <th className='px-7'>Quantity</th>
                    <th className='px-7'>Weight</th>
                    <th className='px-7'>Unit Price</th>
                    <th className='px-7'>Amount</th>
                    
                </tr>
                <tr>
                    <td>Item</td>
                    <td>Item</td>
                    <td>Item</td>
                    <td>Item</td>
                    <td>Item</td>
                    <td>Item</td>
                </tr>
                <tr>
                    <td>Item</td>
                    <td>Item</td>
                    <td>Item</td>
                    <td>Item</td>
                    <td>Item</td>
                    <td>Item</td>
                </tr>
               
            </table>
        </div>

        </div>
      </div>
    </div>
    )
}

export default PaySlipVoucher