import { ICustomDotProps } from '@/interface/props';
import useFilterParams from '@/lib/hooks/useFilterParams';

const CustomDot = (e: ICustomDotProps | Record<string, never>) => {
  const { curFilterData } = useFilterParams('filter');

  return (
    <>
      {curFilterData.includes(e.payload.id) ? (
        <circle cx={e.cx} cy={e.cy} r={2} fill="#277fe4" />
      ) : null}
    </>
  );
};

export default CustomDot;
