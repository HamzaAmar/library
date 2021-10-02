import React from 'react';
import styles from './radio.module.css';
import cn from 'classnames';

type Variant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';

interface Radio {
  label: string;
  name: string;
  variant: Variant;
}

const radio = ({ label, name, variant = 'primary' }: Radio) => {
  const root = cn(styles.radio, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.danger]: variant === 'danger',
    [styles.warning]: variant === 'warning',
    [styles.success]: variant === 'success'
  });
  return (
    <label className={root}>
      <span className={styles.radioInput}>
        <input
          className={`w-visually-hidden ${styles.input}`}
          type="radio"
          name={name}
        />
        <span className={styles.radioControl}></span>
      </span>
      <span className={styles.radioLabel}>{label}</span>
    </label>
  );
};

radio.displayName = 'Radio';

export default radio;
