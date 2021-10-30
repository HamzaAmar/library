import { InputButton, InputButtonSelect } from '@components/common';
import { RightAboutDesign } from '@components/icons';
import { Button, Heading, Input } from '@components/ui';
import React from 'react';
import styles from './about.module.css';

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Heading>Explore your favorite books</Heading>
        <Heading style={{ width: '12ch' }} as="h1" color="dark" size="xl">
          Get Your New <span className={styles.bStyles}>B</span>ook With The
          Best Price
        </Heading>
        <InputButtonSelect
          name="search"
          placeholder="search book , authors , categories"
          buttonTitle="Search"
        />
      </div>

      <div className={styles.middleSection}>
        <img src="library.jpg" className={styles.image} />
      </div>
      <div className={styles.rightSection}>
        <RightAboutDesign />
      </div>
    </div>
  );
};

export default about;
