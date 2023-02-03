import React from 'react'
import DataTable from 'react-data-table-component';


const columns = [
    {
        name: 'Item',
        selector: row => row.item,
        style:{fontWeight: 800}
    },
    {
        name: 'Description',
        selector: row => row.description,
    },
    {
        name: 'Quantity',
        selector: row => row.quantity,
    },
    {
        name: 'Weight',
        selector: row => row.weight,
    },
    {
        name: 'Unit_Price',
        selector: row => row.unit_Price,
    },
    {
        name: 'Amount',
        selector: row => row.amount,
    }
];

const data = [
    {
        id: 1,
        item: '',
        description: '',
        quantity: '',
        weight: '',
        unit_Price: '',
        amount: ''
    },
    {
        id: 2,
        item: '',
        description: '',
        quantity: '',
        weight: '',
        unit_Price: '',
        amount: ''
    },
    {
        id: 3,
        item: '',
        description: '',
        quantity: '',
        weight: '',
        unit_Price: '',
        amount: ''
    },
    {
        id: 4,
        item: '',
        description: '',
        quantity: '',
        weight: '',
        unit_Price: '',
        amount: ''
    },
    {
        id: 5,
        item: '',
        description: '',
        quantity: '',
        weight: '',
        unit_Price: '',
        amount: ''
    },
    {
        id: 6,
        item: '',
        description: '',
        quantity: '',
        weight: '',
        unit_Price: '',
        amount: ''
    },
]

const paymentColumn = [
    {
        name: 'Discount',
        selector: row => row.discount,
    },
    {
        name: 'Total',
        selector: row => row.total,
    },
    {
        name: 'Advance',
        selector: row => row.advance,
    },
]

const paymentData = [
    {
        discount: 'Rs 2',
        total: 'Rs 5',
        advance: 'Rs 1'
    },
]

const PaySlipVoucher = () => {
    return (
        <div className=' flex justify-center items-center md:mx-96 mx-5 md:my-16 my-5 '>
            <div className=' flex md:flex-row flex-col bg-white shadow-2xl'>
                <div className='md:p-10 p-5 w-[800px]'>
                    <div className='flex flex-row justify-between '>
                        <h2 className='text-2xl font-bold'>Virtue Gold pvt ltd</h2>
                        <h3 className='text-xl font-semibold'>RECEIPT</h3>
                    </div>

                    <div className='flex justify-between mr-20'>
                        <div className=''>
                            <div><span>Name: </span><span></span></div>
                            <div><span>Address: </span><span></span></div>
                        </div>

                        <div>
                            <div><span>Date: </span><span></span></div>
                            <div><span>Invoice: </span><span></span></div>
                        </div>
                    </div>

                    <div >
                        {/* <table className='border'>
                <tr className='border'>
                    <th className='w-28 h-12 border-2 border-black'>Item</th>
                    <th className='w-56 h-12 border-2 border-black'>Description</th>
                    <th className='w-24 h-12 border-2 border-black'>Quantity</th>
                    <th className='w-24 h-12 border-2 border-black'>Weight</th>
                    <th className='w-24 h-12 border-2 border-black'>Unit Price</th>
                    <th className='w-24 h-12 border-2 border-black'>Amount</th>
                    
                </tr>
                <tr className=''>
                    <td className='w-28 h-12 border-2 border-black'>Gold</td>
                    <td className='w-56 h-12 border-2 border-black'>This is unique Lorem ipsum dolor sit amet.</td>
                    <td className='w-24 h-12 border-2 border-black'>2</td>
                    <td className='w-24 h-12 border-2 border-black'>2kg</td>
                    <td className='w-24 h-12 border-2 border-black'>1000</td>
                    <td className='w-24 h-12 border-2 border-black'>2000</td>
                </tr>
            </table> */}

                        <DataTable columns={columns} data={data} />
                    </div>

                    <div>
                        <DataTable columns={paymentColumn} data={paymentData} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PaySlipVoucher