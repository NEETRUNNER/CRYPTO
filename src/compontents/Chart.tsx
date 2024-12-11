import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData, ChartOptions } from "chart.js"; // Для правильной работы не забывать импортировать типы чтобы переменная вела себя стабильно
import { Line } from "react-chartjs-2";
import { usePropsContext } from "./StateContext";

// Регистрация модулей Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {

  const {chart} = usePropsContext();

  // Обработка данных
  const timestamps = chart.map((item) =>
    new Date(item[0]).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  const prices = chart.map((item) => item[1]);

  // Данные для смешанного графика
  const chartData: ChartData<"line"> = {
    labels: timestamps,
    datasets: [
      {
        type: "line", // Линия
        label: "Ціна",
        data: prices,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ],
  };

  // Опции графика
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 2000,
    scales: {
      y: {
        stacked: true,
      },
      x: {
        ticks: {
          display: false
        }
      }
    },
  };

  return (
    <div className="chart-container" style={{ width: "100%", height: "100%"}}>
      <Line data={chartData} options={options} width='800px' height={'500px'}/>
    </div>
  );
};

export default Chart;
