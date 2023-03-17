import { IChart } from '@/interface/chartData';

export const transformData = (res: IChart[]) => {
  for (const key in res) {
    res[key].date = key;
  }
  return Object.values(res);
};

export const getFilteredData = (charts: IChart[], ids: string[]): string[] => {
  const filteredData: string[] = charts
    .filter((item) => ids.includes(item.id))
    .map((item) => item.date);

  return filteredData;
};
