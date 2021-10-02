import { Heading } from '@components/ui';
import React from 'react';
import styles from './logo.module.css';

const logo = () => {
  return (
    <div className={styles.container}>
      <Heading size="lg" className={styles.heading}>
        Booki
      </Heading>
    </div>
  );
};

export default logo;
