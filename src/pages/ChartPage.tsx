import { getTimeSeriesData } from '@/api/mock';
import { useEffect } from 'react';
const ChartPage = () => {
  useEffect(() => {
    getTimeSeriesData().then((res) => {
      console.log(res.data.response);
    });
  }, []);
  return <>ChartPage</>;
};

export default ChartPage;
