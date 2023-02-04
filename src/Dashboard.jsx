import React, { useState } from 'react'
import BarChart from './components/chart/BarChart'
import LineChart from './components/chart/LineChart'
import PieChart from './components/chart/PieChart'
import ProgressChart from './components/chart/ProgressChart'

import { Data } from './components/utils/Data'


const Dashboard = () => {

    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
            {
                label: "user gained",
                data: Data.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    })

    return (
        <div className=''>
            {/* <h1 className='py-4 text-2xl'>Dashboard</h1> */}
            {/* <PieChart chartData={chartData} /> */}
            <div className='md:ml-64 sm:ml-0 md:mr-8 '>
                <div className='grid lg:grid-cols-12 gap-12 p-12 bg-gray-100 place-items-center'>
                    <div className="col-span-3">
                        <ProgressChart chartData={chartData}/>
                    </div>
                    <div className="col-span-4 ">
                        <BarChart chartData={chartData} />
                    </div>
                    <div className="col-span-4">
                        <BarChart chartData={chartData} />
                    </div>
                    <div className="col-span-4">
                        <BarChart chartData={chartData} />
                    </div>
                    <div className="col-span-4">
                        <LineChart chartData={chartData} />
                    </div>
                    <div className="col-span-8">
                        <PieChart chartData={chartData} />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Dashboard