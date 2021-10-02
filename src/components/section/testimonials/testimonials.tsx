import { Arrow } from '@components/icons';
import { Button } from '@components/ui';
import { useKeenSlider } from 'keen-slider/react';
import React from 'react';
import styles from './testimonials.module.css';

const Testimonial = () => {
  return (
    <div className={`keen-slider__slide ${styles.testimonial}`}>
      <div className={styles.testimonialHeader}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src="https://picsum.photos/id/123/40/40"
          />
        </div>
        <div className={styles.userInfoContainer}>
          <h2>Hamza Miloud Amar</h2>
          <p>Front End Web Developer</p>
        </div>
      </div>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
        quod doloremque, ad, sed quibusdam nemo dolorum ipsam dolore quia magnam
        veritatis deleniti
      </p>
    </div>
  );
};

const testimonials = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 2.6,
    spacing: 40
  });
  return (
    <section className={`${styles.container} `}>
      <div className={styles.headingContent}>
        <div>
          <h1 className={styles.heading}>Our Testimonials</h1>
          <p>What out client say about The books review And Comments</p>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            size="small"
            color="white"
            icon={
              <Arrow
                width={15}
                style={{
                  transform: 'rotate(180deg)'
                }}
              />
            }
            style={{
              borderTopLeftRadius: '1000px',
              borderBottomLeftRadius: '1000px',
              padding: '0.75rem 1.25rem',
              marginRight: '1rem',
              fontSize: '.8rem'
            }}
          >
            Prev
          </Button>
          <Button
            size="small"
            color="secondary"
            style={{
              borderTopRightRadius: '1000px',
              borderBottomRightRadius: '1000px',
              padding: '0.75rem 1.25rem',
              marginRight: '1rem',
              fontSize: '.8rem'
            }}
            icon={<Arrow width={15} />}
            iconPosition="end"
          >
            Next
          </Button>
        </div>
      </div>
      <div ref={sliderRef} className={`keen-slider ${styles.testimonialsList}`}>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
};

export default testimonials;
