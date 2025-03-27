import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import styles from './styles.module.scss';
import { TimePeriod } from '../../types/timeline';


type CircleProps = {
  periods: TimePeriod[];
  activeIndex: number;
  onChangePeriod: (index: number) => void;
};

export const CircleSVG = ({ periods, activeIndex, onChangePeriod }: CircleProps) => {
  useGSAP(() => {
    // Плавное вращение с "отпружиниванием"
    gsap.to(".points-group", {
      rotation: -activeIndex * (360 / periods.length),
      duration: 1.2,
      ease: "elastic.out(1, 0.5)"
    });
  }, [activeIndex]);

  return (
    <div className={styles.circleContainer}>
      <svg viewBox="0 0 200 200">
        {/* Статические линии */}
        <circle cx="100" cy="100" r="85" stroke="#E0E0E0" strokeWidth="1" fill="none" />
        
        {/* Интерактивные точки */}
        <g className="points-group">
          {periods.map((period, index) => {
            const angle = (360 / periods.length) * index - 90;
            const x = 100 + Math.cos(angle * Math.PI / 180) * 75;
            const y = 100 + Math.sin(angle * Math.PI / 180) * 75;

            return (
              <g key={period.year}>
                <circle
                  cx={x}
                  cy={y}
                  r={activeIndex === index ? 6 : 4}
                  fill={activeIndex === index ? "#5D5F6A" : "#E0E0E0"}
                  onClick={() => onChangePeriod(index)}
                  className={styles.point}
                />
              </g>
            );
          })}
        </g>
      </svg>
      
      <div className={styles.yearDisplay}>
        <div className={styles.currentYear}>{periods[activeIndex].year}</div>
        {periods[activeIndex].events[0]?.date && (
          <div className={styles.eventDate}>{periods[activeIndex].events[0].date}</div>
        )}
      </div>
    </div>
  );
};