import { useSearchParams } from 'react-router-dom';

const useFilterParams = (pramsKey: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const curFilterData = searchParams.get(pramsKey)?.split(',') || [];

  const toggleFilter = (id: string) => {
    const isExist = curFilterData.includes(id);

    if (isExist) {
      const removedList = curFilterData.filter((item) => item !== id);
      setSearchParams(
        `${pramsKey}=${encodeURIComponent(removedList.join(','))}`,
      );
    } else {
      curFilterData.push(id);
      setSearchParams(
        `${pramsKey}=${encodeURIComponent(curFilterData.join(','))}`,
      );
    }
  };

  const resetFilter = () => {
    setSearchParams('');
  };

  return { curFilterData, toggleFilter, resetFilter };
};

export default useFilterParams;
