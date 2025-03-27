import { useState } from 'react';
import { CircleSVG } from './CircleSVG';
import { EventsSlider } from './EventsSlider';
import styles from './styles.module.scss';
import { usePeriods } from '../../hooks/usePeriods';

export const TimeCircle = () => {
  const { periods } = usePeriods();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      <CircleSVG 
        periods={periods}
        activeIndex={activeIndex}
        onChangePeriod={setActiveIndex}
      />
      <EventsSlider events={periods[activeIndex].events} />
    </div>
  );
};