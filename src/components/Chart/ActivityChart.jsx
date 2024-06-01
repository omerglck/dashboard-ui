import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Title from "../Title";

const ActivityChart = ({ data }) => {
  const chartData = {
    labels: data.map((i) => i.date),
    datasets: [
      {
        id: 1,
        label: "Hours",
        data: data.map((i) => i.hours),
      },
      {
        id: 2,
        label: "Completed Exams",
        data: data.map((i) => i.exams_completed),
      },
      {
        id: 2,
        label: "Taken Lessons",
        data: data.map((i) => i.lessons_taken),
      },
    ],
  };

  return (
    <div>
      <Title>Activity Hours</Title>

      <Bar data={chartData} />
    </div>
  );
};

export default ActivityChart;
