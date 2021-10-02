import React from 'react';
import styles from './checkbox.module.css';
import { Check } from '@components/icons';

type Variant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';

interface Checkbox {
  label: string;
  name: string;
  variant: Variant;
}

const checkbox = ({ label, name, variant = 'primary' }: Checkbox) => {
  // const root = cn(styles.checkbox, {
  //   [styles.primary]: variant === 'primary',
  //   [styles.secondary]: variant === 'secondary',
  //   [styles.danger]: variant === 'danger',
  //   [styles.warning]: variant === 'warning',
  //   [styles.success]: variant === 'success'
  // });

  const classNames = `${styles.checkbox} ${styles[variant]}`;
  return (
    <label className={classNames}>
      <span className={styles.checkboxInput}>
        <input
          className={`w-visually-hidden ${styles.input}`}
          type="checkbox"
          name={name}
        />
        <span className={styles.checkboxControl}>
          <Check aria-hidden="true" focusable="false" />
        </span>
      </span>
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  );
};

checkbox.displayName = 'CheckBox';

export default checkbox;
