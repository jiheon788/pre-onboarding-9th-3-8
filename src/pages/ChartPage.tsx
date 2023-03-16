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
  Cell,
} from 'recharts';
import CustomTooltip from '@/components/CustomTooltips';
import useFetch from '@/lib/hooks/useFetch';
import { API_URL } from '@/constants/url';
import generateMixedKeyAndValueArr from '@/lib/utils/generateMixedKeyAndValueArr';
import { useNavigate } from 'react-router';
import { IChart } from '@/interface/chartData';
import generateStartAndEndDate from '@/lib/utils/generateDate';
import { useEffect, useState } from 'react';
import { getUniqueIds } from '@/lib/utils/getUniqueItems';
import { useSearchParams } from 'react-router-dom';
import CustomDot from '@/components/CustomDot';

const ChartPage = () => {
  const [chartData, isLoading, isError] = useFetch<IChart[]>(
    [],
    API_URL,
    generateMixedKeyAndValueArr,
  );
  const navigate = useNavigate();
  const [uniqueIds, setUniqueIds] = useState<string[]>([]);
  const { startDate, endDate } = generateStartAndEndDate(chartData);
  const [searchParams] = useSearchParams();
  const QUERY_ID = searchParams.get('id');

  useEffect(() => {
    setUniqueIds(getUniqueIds(chartData));
  }, [chartData]);

  const onFilter = (id?: string) => {
    navigate(`/chart${id ? `?id=${id}` : ''}`);
  };

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error...</>;
  return (
    <div className="outer">
      <h1>{`${startDate} ~ ${endDate}`}</h1>
      <div>
        <button type="button" onClick={() => onFilter()}>
          Reset
        </button>
        {uniqueIds.map((uniqueId) => (
          <button
            key={uniqueId}
            type="button"
            onClick={() => onFilter(uniqueId)}
          >
            {uniqueId}
          </button>
        ))}
      </div>
      <div className="inner">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
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
              label={{ value: 'value_area', position: 'top', offset: 20 }}
            />
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ outline: 'none' }}
            />
            <Legend />
            <Bar yAxisId="left" dataKey="value_bar" fill="black" barSize={20}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.id === QUERY_ID ? 'red' : 'black'}
                  onClick={() => onFilter(entry.id)}
                />
              ))}
            </Bar>
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="value_area"
              stroke="#ff8787"
              fill="#ffa8a8"
              dot={(props: any) => (
                <CustomDot
                  key={props.key}
                  payload={props.payload}
                  cx={props.cx}
                  cy={props.cy}
                  id={QUERY_ID}
                />
              )}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartPage;
