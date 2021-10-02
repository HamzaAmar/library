import React from 'react';
import { Star } from '@components/icons';
import styles from './bookList.module.css';
import { useKeenSlider } from 'keen-slider/react';
import { Book } from '..';
import BOOKS_DATA from '@constants/books';

const bookList = ({ books }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 5,
    spacing: 32
  });
  return (
    <section className={styles.sectionContainer}>
      <h1 className={styles.heading}>Most Selling Books</h1>
      <p>Our Products</p>
      <div ref={sliderRef} className={`keen-slider ${styles.container}`}>
        {books.map(({ id, ...rest }) => (
          <Book key={id} {...rest} />
        ))}
      </div>
    </section>
  );
};

export default bookList;
