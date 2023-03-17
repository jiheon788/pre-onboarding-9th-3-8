import apiClient from '@/api';

export const getData = (url: string) => {
  try {
    return apiClient.get(url);
  } catch (e) {
    throw new Error('데이터가 없습니다.');
  }
};
