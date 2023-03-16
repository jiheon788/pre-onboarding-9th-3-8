import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts';
import CustomTooltip from '@/components/CustomTooltips';
import useFetch from '@/lib/hooks/useFetch';
import { API_URL } from '@/constants/url';
import generateMixedKeyAndValueArr from '@/lib/utils/generateMixedKeyAndValueArr';
import { Navigate } from 'react-router';
import { IChart } from '@/interface/chartData';
import generateStartAndEndDate from '@/lib/utils/generateDate';

const Home = () => {
  const [chartData, isLoading, isError] = useFetch<IChart[]>(
    [],
    API_URL,
    generateMixedKeyAndValueArr,
  );
  const { start, end } = generateStartAndEndDate(chartData as IChart[]);

  if (isLoading) return <>Loading...</>;
  if (isError) return <Navigate to="/" />;
  return (
    <div className="outer">
      <h1>{`${start} ~ ${end}`}</h1>
      <div className="inner">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData as IChart[]}
            margin={{
              top: 40,
              right: 30,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              yAxisId="left"
              label={{ value: 'value_bar', position: 'top', offset: 20 }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 150]}
              label={{ value: 'value_area', position: 'top', offset: 20 }}
            />
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ outline: 'none' }}
            />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="value_bar"
              fill="#868e96"
              barSize={20}
            />
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="value_area"
              stroke="#ff8787"
              fill="#ffa8a8"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Home;
