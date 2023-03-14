import { getTimeSeriesData } from '@/api/mock';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler,
);

export const ChartPage = () => {
  const [timeSeries, setTimeSeries] = useState<any[]>([]);

  useEffect(() => {
    getTimeSeriesData().then((res) => {
      setTimeSeries(
        Object.keys(res.data.response).map((time) => {
          return { time, ...res.data.response[time] };
        }),
      );
    });
  }, []);

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      tooltip: {
        callbacks: {
          footer: (tooltipItems: any) =>
            timeSeries[tooltipItems[0].dataIndex].id,
        },
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const data = {
    labels: timeSeries.map((cur: any) => cur.time),
    datasets: [
      {
        type: 'line' as const,
        fill: true,
        label: 'value_area',
        data: timeSeries.map((cur: any) => cur.value_area),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
      },
      {
        type: 'bar' as const,
        label: 'value_bar',
        backgroundColor: 'rgb(75, 192, 192)',
        data: timeSeries.map((cur: any) => cur.value_bar),
        borderColor: 'white',
        yAxisID: 'y1',
      },
    ],
  };

  return <Chart type="line" data={data} options={options} />;
};

export default ChartPage;
