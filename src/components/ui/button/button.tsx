import React from 'react';
import { ButtonProps } from './button.type';
import styles from './button.module.css';
import cn from 'classnames';

const button = (props: ButtonProps) => {
  const {
    children,
    icon,
    size = 'small',
    iconPosition = 'start',
    variant = 'contained',
    type = 'button',
    radius = 'none',
    className,
    ...rest
  } = props;

  const classNames = `${styles.btn} ${styles[radius]} ${styles[variant]} ${styles[size]} ${className}`;

  const left = icon && iconPosition === 'start';

  const right = icon && iconPosition === 'end';

  return (
    <button className={classNames} type={type} {...rest}>
      {left && icon}
      <span
        className={cn({
          [styles.leftMargin]: left,
          [styles.rightMargin]: right
        })}
      >
        {children}
      </span>
      {right && icon}
    </button>
  );
};

button.displayName = 'Button';

export default button;
