import Title from '../Title';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const Chart = ({ title, data }) => {
  const chartData = {
    labels: data.map((i) => i.skill),
    datasets: [
      {
        id: 1,
        label: 'Employee',
        data: data.map((i) => i.employees),
      },
    ],
  };

  return (
    <div>
      <Title>{title}</Title>

      <Bar data={chartData} />
    </div>
  );
};

export default Chart;
