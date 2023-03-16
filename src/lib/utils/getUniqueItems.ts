import { IChart } from '@/interface/chartData';

export const getUniqueIds = (arr: IChart[]) => [
  ...new Set(arr.map((item) => item.id)),
];
