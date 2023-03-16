import { IChart } from './chartData';

export interface IChartProps {
  data: IChart[];
  start: string;
  end: string;
}

export interface ICustomDot {
  cx: number;
  cy: number;
  payload: any;
  id: string | null;
}
