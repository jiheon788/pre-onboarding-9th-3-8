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
  ReferenceArea,
  Cell,
} from 'recharts';
import CustomTooltip from '@/components/Chart/CustomTooltips';
import { IActivePayload } from '@/interface/props';
import CustomDot from './CustomDot';
import { CategoricalChartFunc } from 'recharts/types/chart/generateCategoricalChart';
import styles from '@/components/Chart/style.module.css';
import useFilterParams from '@/lib/hooks/useFilterParams';
import { getFilteredData } from '@/lib/utils/chartHelper';
import { IChart } from '@/interface/chartData';

const Chart = ({ data }: { data: IChart[] }) => {
  const { curFilterData, toggleFilter } = useFilterParams('filter');
  const filteredData = getFilteredData(data, curFilterData);

  const onClick = ({ activePayload }: IActivePayload) => {
    const payload = activePayload[0].payload;

    if (payload.id) {
      toggleFilter(payload.id);
    }
  };

  return (
    <>
      <div className={styles.inner}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 40,
              right: 30,
              left: 20,
            }}
            onClick={onClick as CategoricalChartFunc}
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
              fill={`var(--bar)`}
              barSize={20}
            >
              {data.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={
                    curFilterData.includes(entry.id)
                      ? `var(--bar-highlight)`
                      : `var(--bar)`
                  }
                  key={`cell-${index}`}
                />
              ))}
            </Bar>
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="value_area"
              stroke={`var(--area)`}
              fill={`var(--area)`}
              isAnimationActive={false}
              dot={<CustomDot />}
            />
            {filteredData.map((date) => (
              <ReferenceArea
                key={date}
                yAxisId="right"
                x1={date}
                x2={date}
                ifOverflow="visible"
                fill={`var(--highlight)`}
                fillOpacity={0.4}
              />
            ))}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
