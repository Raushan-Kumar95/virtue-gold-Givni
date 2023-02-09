import { fontSize } from '@mui/system';
import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import logo from '/vietue_logo_2.png';


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
        name: 'Unit Price',
        selector: row => row.unitPrice,
    },
    {
        name: 'Amount',
        selector: row => row.amount,
    }
];

const data = [
    {
        id: 1,
        item: 'Gold Coin',
        description: 'pure gold Coin',
        quantity: '2',
        weight: '500g',
        unitPrice: '8000',
        amount: '16000'
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
        name: 'Total',
        selector: row => row.total,
    },
    {
        name: 'Discount',
        selector: row => row.discount,
    },
    {
        name: 'Grand Total',
        selector: row => row.grandTotal,
    },
]

const paymentData = [
    {
        total: '16000',
        discount: '1000',
        grandTotal: '15000'
    },
]

const customStylesForData = {
    // rows: {
    //     style: {
    //         minHeight: '50px',
    //         border:'1px solid gray'
    //     },
    // },
    headCells: {
        style: {
            paddingLeft: '5px', 
            paddingRight: '5px',
            fontWeight: '600',
            fontSize: '16px',
            borderBottom:'1px solid gray',
            marginTop: '15px'
        },
    },
    cells: {
        style: {
            paddingLeft: '5px', 
            paddingRight: '5px',
            borderBottom:'1px solid gray',
            borderRight:'1px solid gray',
            borderLeft:'1px solid gray',
            fontSize: '14px'
        },
    },
};

const customStylesForPaymentData = {
    headCells: {
        style: {
            paddingLeft: '5px', 
            paddingRight: '5px',
            fontWeight: '600',
            fontSize: '16px',
            marginTop: '20px'
        },
    },
    cells: {
        style: {
            paddingLeft: '5px', 
            paddingRight: '5px',
            border:'1px solid gray',
            fontSize: '14px'
        },
    },
}



// createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme('solarized', {
    text: {
    //   primary: 'gray',
    },
    background: {
    //   default: 'grayLight',
    },
  });

const PaySlipVoucher = () => {
    return (
        <div className=' flex md:ml-64 sm:ml-0 md:mr-8 '>
            <div className=' flex md:flex-row flex-col bg-white  border-2 mb-10 shadow-md'>
                <div className='md:p-10 p-5 w-[800px]'>
                    <div className='flex flex-row justify-between'>
                        <img src={logo} width={100} alt="logo" />
                        <h1 className='text-2xl font-bold'>Virtue Gold pvt ltd</h1>
                        <h3 className='text-xl font-semibold'>RECEIPT</h3>
                    </div>

                    <div className='flex justify-between mr-20 mt-5'>
                        <div className=''>
                            <div className='my-2'><span>Name: </span><span></span></div>
                            <div><span>Address: </span><span></span></div>
                        </div>

                        <div>
                            <div className='my-2'><span>Date: </span><span></span></div>
                            <div><span>Invoice: </span><span></span></div>
                        </div>
                    </div>

                    <div >
                        <DataTable columns={columns} data={data} customStyles={customStylesForData} theme="solarized" />
                    </div>

                    <div>
                        <DataTable columns={paymentColumn} data={paymentData} customStyles={customStylesForPaymentData} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default PaySlipVoucher