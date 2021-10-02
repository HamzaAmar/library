import React from 'react';
import styles from './text.module.css';

import { TextProps } from './text.type';

const text = (props: TextProps) => {
  const {
    children,
    as: Comp = 'p',
    size = 'md',
    color = 'main',
    className,
    ...rest
  } = props;

  const classNames = `${styles[size]} ${styles[color]} ${className}`;

  return <Comp className={classNames} {...rest}></Comp>;
};

export default text;
