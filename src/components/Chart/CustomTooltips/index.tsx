import { TooltipProps } from 'recharts';
import styles from './style.module.css';
import position from '@/assets/icons/position.svg';

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>): JSX.Element | null => {
  if (active && payload && payload.length) {
    const [bar, area] = payload;
    return (
      <div className={styles.tooltip}>
        <div className={styles.title_container}>
          <div className={styles.img_position}>
            <img src={position} alt="position" />
          </div>
          <p className={styles.title}>{`${bar.payload.id}`}</p>
        </div>
        <div>
          <p>
            {`${bar.dataKey} : `}
            <span className={styles.bar_value}>{`${bar.value}`}</span>
          </p>
          <p>
            {`${area.dataKey} : `}
            <span className={styles.area_value}>{`${area.value}`}</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
