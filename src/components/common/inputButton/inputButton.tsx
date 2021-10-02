import { Button, Input } from '@components/ui';
import React from 'react';
import styles from './inputButton.module.css';

const InputButton = ({ color, buttonTitle, size, radius, ...rest }: any) => {
  return (
    <form className={styles.inputContainer}>
      <div className={styles.inputWrapper}>
        <Input {...rest} style={{ border: 0 }} />
      </div>
      <Button
        type="submit"
        autoCorrect="false"
        color={color}
        radius={radius}
        size={size}
      >
        {buttonTitle}
      </Button>
    </form>
  );
};

InputButton.defaultProps = {
  color: 'primary',
  size: 'medium',
  radius: 'rounded'
};

export default InputButton;
