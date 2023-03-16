import { IChart } from '@/interface/chartData';

const maxDate = (dates: Date[]) => new Date(Math.max(...dates.map(Number)));
const minDate = (dates: Date[]) => new Date(Math.min(...dates.map(Number)));

const generateStartAndEndDate = (data: IChart[]) => {
  const dateList = data.map(({ date }) => new Date(date));

  const min = minDate(dateList);
  const startDate = `${min.getFullYear()}-${
    min.getMonth() + 1
  }-${min.getDate()}`;

  const max = maxDate(dateList);
  const endDate = `${max.getFullYear()}-${max.getMonth() + 1}-${max.getDate()}`;

  return { startDate, endDate };
};

export default generateStartAndEndDate;
