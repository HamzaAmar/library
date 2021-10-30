import React from 'react';
import { InputProps } from './input.type';
import styles from './input.module.css';
import { Cross } from '@components/icons';

const input = (props: InputProps) => {
  const {
    size = 'fluid',
    leftIcon,
    rightIcon,
    touched,
    error,
    ...rest
  } = props;

  const leftIconBlock = leftIcon ? (
    <span className={styles.leftIcon}>{leftIcon}</span>
  ) : null;

  const rightIconBlock = rightIcon ? (
    <span className={styles.rightIcon}>{rightIcon}</span>
  ) : null;

  const inputClassNames = `${styles.input} ${styles[size]}`;

  const messageContent =
    touched && error ? (
      <div className={styles.messageContainer}>
        <Cross width="15" />
        <small className={styles.message}> {error} </small>
      </div>
    ) : null;

  return (
    <div>
      <div className={styles.inputContainer}>
        {leftIconBlock}
        <input
          className={inputClassNames}
          data-error={touched && !!error}
          {...rest}
        />
        {rightIconBlock}
      </div>
      {messageContent}
    </div>
  );
};

input.displayName = 'Input';

export default input;
