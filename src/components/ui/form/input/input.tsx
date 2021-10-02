import React from 'react';
import { InputProps } from './input.type';
import styles from './input.module.css';

const input = (props: InputProps) => {
  const { size = 'fluid', leftIcon, rightIcon, ...rest } = props;

  const leftIconBlock = leftIcon ? (
    <span className={styles.leftIcon}>{leftIcon}</span>
  ) : null;

  const rightIconBlock = rightIcon ? (
    <span className={styles.rightIcon}>{rightIcon}</span>
  ) : null;

  const inputClassNames = `${styles.input} ${styles[size]}`;

  return (
    <div className={styles.inputContainer}>
      {leftIconBlock}
      <input className={inputClassNames} {...rest} />
      {rightIconBlock}
    </div>
  );
};

input.displayName = 'Input';

export default input;
