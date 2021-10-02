import React from 'react';
import styles from './bookCarousel.module.css';
import { useKeenSlider } from 'keen-slider/react';
import { Book } from '..';
import BOOKS_DATA from '@constants/books';

const bookCarousel = ({ books }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 3,
    spacing: 32
  });
  return (
    <div ref={sliderRef} className={`keen-slider ${styles.booksContainer}`}>
      {books.map(({ id, ...rest }) => (
        <Book key={id} {...rest} />
      ))}
    </div>
  );
};

export default bookCarousel;
