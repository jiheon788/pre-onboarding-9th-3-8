import { ICustomDot } from '@/interface/props';

const CustomDot = ({ cx, cy, payload, id }: ICustomDot) => {
  if (payload.id === id) {
    return <circle cx={cx} cy={cy} r={8} fill="red" />;
  }

  return <></>;
};

export default CustomDot;
