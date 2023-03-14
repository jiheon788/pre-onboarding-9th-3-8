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
  const [areaData, setAreaData] = useState<number[]>([]);
  const [barData, setBarData] = useState<number[]>([]);
  const [idData, setIdData] = useState<string[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    getTimeSeriesData().then((res) => {
      setLabels(Object.keys(res.data.response));
      setAreaData(
        Object.keys(res.data.response).map(
          (key) => res.data.response[key].value_area,
        ),
      );
      setBarData(
        Object.keys(res.data.response).map(
          (key) => res.data.response[key].value_bar,
        ),
      );
      setIdData(
        Object.keys(res.data.response).map((key) => res.data.response[key].id),
      );
    });
  }, []);

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis',
      },
      tooltip: {
        callbacks: {
          footer: (tooltipItems: any) => idData[tooltipItems[0].dataIndex],
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
    labels,
    datasets: [
      {
        type: 'line' as const,
        fill: true,
        label: 'value_area',
        data: areaData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
      },
      {
        type: 'bar' as const,
        label: 'value_bar',
        backgroundColor: 'rgb(75, 192, 192)',
        data: barData,
        borderColor: 'white',
        borderWidth: 2,
        yAxisID: 'y1',
      },
    ],
  };

  return <Chart type="line" data={data} options={options} />;
};

export default ChartPage;
