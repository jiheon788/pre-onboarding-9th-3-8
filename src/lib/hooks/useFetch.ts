import { useEffect, useState } from 'react';
import apiClient from '@/api';

const useFetch = <T>(
  defaultValue: T,
  url: string,
  preProcessData: any = null,
) => {
  const [payload, setPayload] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(url)
      .then((res) =>
        preProcessData === null
          ? res.data.response
          : preProcessData(res.data.response),
      )
      .then((res) => setPayload(res))
      .catch((_) => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [preProcessData, url]);

  return [payload, isLoading, isError];
};

export default useFetch;
