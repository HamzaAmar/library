import { Logo } from '@components/common';
import { Apple } from '@components/icons';
import { Button } from '@components/ui';
import React from 'react';
import styles from './smartPhone.module.css';

const smartPhone = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          id="blobSvg"
        >
          <defs>
            <clipPath id="shape">
              <path
                fill="#FF0066"
                d="M41.5,25.2C27.3,48.5,-28.8,48.7,-42.7,25.6C-56.6,2.4,-28.3,-44.2,-0.2,-44.3C27.8,-44.4,55.6,1.9,41.5,25.2Z"
                transform="translate(100 100) scale(2)"
              />
            </clipPath>
          </defs>
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            clipPath="url(#shape)"
            xlinkHref="https://source.unsplash.com/5PVXkqt2s9k/500x500"
            preserveAspectRatio="none"
          ></image>
        </svg>
      </div>
      <div className={styles.info}>
        <Logo />
        <h2 className={styles.heading}>Available For Your Smartphone .</h2>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui aliquam
          repellat illum eligendi facere, laborum magni dicta eos quas odit iure
          ea consequatur tempora minus eaque alias officia, dolorum sunt!
        </p>
        <Button
          size="small"
          style={{
            textAlign: 'start',
            borderRadius: 'var(--border-radius)'
          }}
          icon={<Apple width="20" style={{ marginRight: '1rem' }} />}
        >
          Available on <b className={styles.bold}>APP store</b>
        </Button>
      </div>
    </section>
  );
};

export default smartPhone;
