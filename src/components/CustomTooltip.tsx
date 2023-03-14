import { TooltipProps } from 'recharts';

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>): JSX.Element | null => {
  if (active && payload && payload.length) {
    const { id, time, value_area, value_bar } = payload[0].payload;

    return (
      <div className="custom-tooltip">
        <div>{id}</div>
        <div>{time}</div>
        <div>{value_area}</div>
        <div>{value_bar}</div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
