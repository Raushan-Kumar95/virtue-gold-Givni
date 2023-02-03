import React from 'react'
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Name',
        selector: row => row.name,
        sortable:true

    },
    {
        name: 'Join Date',
        selector: row => row.date,
        sortable:true
    },
    {
        name: "Amount",
        selector: row => row.amount,
        sortable:true
    }
];

const data = [
    {
        id: 1,
        name: 'Raushan',
        date: '24-10-2010',
        amount: "30000"
    },
    {
        id: 2,
        name: 'Ravi Kumar',
        date: '23-12-2023',
        amount: "8050"
    },
    {
        id: 3,
        name: 'Rakesh Kumar',
        date: '09-01-2022',
        amount: "24000"
    }
]


const Client = () => {
  return (
    <div className='flex flex-col justify-center px-8 md:px-[40vh]'>
        <h1 className='text-2xl font-bold text-left pl-4 text-red-400'>ALL CLIENT LIST</h1>
        
        <div>
        <DataTable
            columns={columns}
            data={data}
        />
        </div>

    </div>
  )
}

export default Client