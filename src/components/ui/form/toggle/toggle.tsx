import React from 'react';
import styles from './toggle.module.css';
import cn from 'classnames';
import { Check } from '@components/icons';

type Variant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';

interface Checkbox {
  label: string;
  name: string;
  variant: Variant;
  id?: string;
}

const toggle = ({ label, name, variant = 'primary', id = name }: Checkbox) => {
  const root = cn(styles.toggle, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.danger]: variant === 'danger',
    [styles.warning]: variant === 'warning',
    [styles.success]: variant === 'success'
  });
  return (
    <label className={root} htmlFor={id}>
      <span className={styles.toggleInput}>
        <input
          className={`w-visually-hidden ${styles.input}`}
          type="checkbox"
          name={name}
          id={id}
        />
        <span className={styles.toggleControl}></span>
      </span>
      <span className={styles.toggleLabel}>{label}</span>
    </label>
  );
};

toggle.displayName = 'Toggle';

export default toggle;
