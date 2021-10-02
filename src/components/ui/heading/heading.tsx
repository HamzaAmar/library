import React from 'react';
import styles from './heading.module.css';
import type { HeadingProps } from './heading.type';

const heading = (props: HeadingProps) => {
  const {
    as: Comp = 'h1',
    children,
    size = 'sm',
    color = 'light',
    className,
    ...rest
  } = props;

  const classNames = `${styles.heading} ${styles[size]} ${styles[color]} ${className}`;
  return (
    <Comp className={classNames} {...rest}>
      {children}
    </Comp>
  );
};

export default heading;
