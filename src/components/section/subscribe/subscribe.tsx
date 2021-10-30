import { InputButton } from '@components/common';
import React from 'react';
import styles from './subscribe.module.css';

const subscribe = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Subscribe Our Newsletter Newest Books Updates
      </h1>
      <InputButton
        name="subscribe"
        placeholder="Type Your Email Here"
        buttonTitle="Subscribe"
      />
    </div>
  );
};

export default subscribe;
