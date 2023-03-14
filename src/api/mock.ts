import apiClient from './apiClient';

export const getTimeSeriesData = () => {
  return apiClient({
    method: 'get',
    url: '/mock/mockdata.json',
  });
};
