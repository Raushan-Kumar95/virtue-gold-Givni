import React from 'react'
import Chart from 'chart.js/auto'; 
import { Bar } from "react-chartjs-2";

 const BarChart = ({ chartData }) => {
    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
            <Bar
                data={chartData}
            />
        </div>
    );

};

export default BarChart