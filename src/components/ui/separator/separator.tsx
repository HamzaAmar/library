import React from 'react';
import { SeparatorProps } from './separator.type';
import styles from './separator.module.css';

const separator = (props: SeparatorProps) => {
  const { orientation = 'horizontal', title, className, ...rest } = props;

  const classNames = `${styles.separator}`;

  return (
    <div className={classNames} {...rest} data-title={title} />
  );
};

export default separator;
