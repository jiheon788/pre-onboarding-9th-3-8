import useFilterParams from '@/lib/hooks/useFilterParams';
import { MouseEvent, useEffect, useState } from 'react';
import style from './style.module.css';

const FilterBtn = ({ name }: { name: string }) => {
  const { curFilterData, toggleFilter } = useFilterParams('filter');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (curFilterData && curFilterData?.includes(name)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [name, curFilterData]);

  const onClickFilter = (e: MouseEvent<HTMLButtonElement>) => {
    const filterId = (e.target as HTMLLIElement).textContent;

    setToggle((prev) => !prev);
    if (filterId) {
      toggleFilter(filterId);
    }
  };

  return (
    <button
      onClick={onClickFilter}
      className={`${style.filterBtn} ${toggle ? style.active : ''}`}
    >
      {name}
    </button>
  );
};
export default FilterBtn;
