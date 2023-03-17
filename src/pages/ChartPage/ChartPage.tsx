import Chart from '@/components/Chart/Chart';
import { API_URL } from '@/constants/url';
import { IChart } from '@/interface/chartData';
import useFetch from '@/lib/hooks/useFetch';
import styles from '@/pages/ChartPage/style.module.css';
import { transformData } from '@/lib/utils/chartHelper';
import { generateStartAndEndDate } from '@/lib/utils/generateDate';
import FilterList from '@/components/Chart/FilterList';

const ChartPage = () => {
  const [chartData, isLoading, isError] = useFetch<IChart[]>(
    [],
    API_URL,
    transformData,
  );
  const { startDate, endDate } = generateStartAndEndDate(chartData);

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Error...</>;

  return (
    <div className={styles.container}>
      <section className={styles.top}>
        <h1>시계열 차트</h1>
        <span>
          <span className={styles.date}> {startDate} </span>부터
          <span className={styles.date}> {endDate} </span>까지의 시계열
          차트입니다.
        </span>
      </section>
      <section className={styles.filters}>
        <h3>Filters</h3>
        <FilterList data={chartData} />
      </section>
      <section className={styles.chart}>
        <Chart data={chartData} />
      </section>
    </div>
  );
};

export default ChartPage;
