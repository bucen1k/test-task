import { Swiper, SwiperSlide } from 'swiper/react';
import { LiteraryEvent } from '../../types/timeline';
import styles from './styles.module.scss';

interface EventsSliderProps {
  events: LiteraryEvent[];
}

export const EventsSlider = ({ events }: EventsSliderProps) => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        slidesPerView={1.3}
        spaceBetween={25}
        centeredSlides
        loop
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className={`${styles.eventCard} ${event.isNobel ? styles.nobel : ''}`}>
              <div className={styles.eventContent}>
                {event.isNobel && (
                  <div className={styles.nobelBadge}>Нобелевская премия</div>
                )}
                <p className={styles.eventDescription}>{event.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};