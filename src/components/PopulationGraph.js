// PopulationGraph.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const PopulationGraph = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        const loadPopulationData = async () => {
            try {
                const response = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
                const fetchedData = response.data.data;

                setChartData({
                    labels: fetchedData.map(item => item.Year),
                    datasets: [{
                        label: 'Population',
                        data: fetchedData.map(item => item.Population),
                        borderColor: 'rgb(75, 192, 192)',
                        fill: false
                    }]
                });
            } catch (error) {
                console.error('Error fetching population data:', error);
            }
        };

        loadPopulationData();
    }, []);

    return (
        <div>
            {chartData && chartData.datasets.length > 0 ? (
                <Line data={chartData} />
            ) : (
                <div>Loading chart data...</div>
            )}
        </div>
    );
};

export default PopulationGraph;



