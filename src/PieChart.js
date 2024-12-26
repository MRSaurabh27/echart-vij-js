import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: ['red', 'blue', 'yellow'],
        borderColor: ['black', 'black', 'black'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pie-chart-container">
      <h2>Pie Chart Example</h2>
      <div className="pie-chart-box">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default PieChart;
