import { getTimeSeriesData } from '@/api/mock';
import CustomTooltip from '@/components/CustomTooltip';
import { Palette } from '@/constants/styles';
import { ITimeSeriesItem } from '@/interface/main';
import { useEffect, useState } from 'react';
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const ChartPage = () => {
  const [timeSeries, setTimeSeries] = useState<ITimeSeriesItem[]>([]);

  useEffect(() => {
    getTimeSeriesData().then((res) => {
      setTimeSeries(
        Object.keys(res.data.response).map((time) => {
          return { time, ...res.data.response[time] };
        }),
      );
    });
  }, []);

  return (
    <ComposedChart
      width={1000}
      height={400}
      data={timeSeries}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="time"
        label={{
          value: 'value_bar',
          position: 'insideBottomRight',
          offset: 0,
        }}
        scale="band"
      />
      <YAxis
        yAxisId="left"
        orientation="left"
        label={{ value: 'value_bar', position: 'top' }}
      />
      <YAxis
        yAxisId="right"
        orientation="right"
        label={{ value: 'value_area', position: 'top' }}
      />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Bar
        yAxisId="left"
        dataKey="value_bar"
        barSize={20}
        fill={Palette.AQUA}
      />
      <Area
        yAxisId="right"
        type="monotone"
        dataKey="value_area"
        fill={Palette.ORANGE}
        stroke={Palette.ORANGE}
      />
    </ComposedChart>
  );
};

export default ChartPage;
