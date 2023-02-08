import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BarChart from './components/chart/BarChart'
import LineChart from './components/chart/LineChart'
import PieChart from './components/chart/PieChart'
import ProgressChart from './components/chart/ProgressChart'
import {USER_TYPES } from './components/utils/RoleAuth'



import { Data } from './components/utils/Data'


const Dashboard = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!sessionStorage.getItem('token')) {
            // navigate('/login')
            
        }
    }, [])

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

    // let filteredData = Data.filter((data) => data.year > 2017);
    // console.log(filteredData)

    return (
        <div className=''>

            <div className='md:ml-64 sm:ml-0 md:mr-8 '>
                <div className='grid lg:grid-cols-12 gap-12 p-12 bg-gray-100 place-items-center'>
                    {Data.filter((data) => data.year > 2016).map((data) => {
                        let { progress, year, userGain, userLost } = data;
                        return (
                            <div className="col-span-4" >
                                <ProgressChart progress={progress} year={year} userGain={userGain} userLost={userLost} />
                            </div>
                        );
                    })}

                    <div className="col-span-4 ">
                        <BarChart chartData={chartData} />
                    </div>

                    <div className="col-span-4">
                        <LineChart chartData={chartData} />
                    </div>
                    <div className="col-span-4">
                        <PieChart chartData={chartData} />
                    </div>

                </div>
            </div>
        </div >

    )
}

export default Dashboard