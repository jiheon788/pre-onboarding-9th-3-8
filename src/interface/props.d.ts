import { IChart } from './chartData';

export interface IActivePayload {
  activePayload: {
    payload: IChart;
  }[];
}

export interface ICustomDotProps {
  cx: number;
  cy: number;
  payload: IChart;
}

export interface IChartFilterProps {
  data: IChart[];
}
