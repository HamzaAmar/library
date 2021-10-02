import CATEGORIES_DATA, { CategoryType } from '@constants/categoris';
import React from 'react';
import styles from './categories.module.css';

const Category = ({ icon, title }: Omit<CategoryType, 'id'>) => {
  return (
    <div className={styles.category}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h2 className={styles.heading}>{title}</h2>
    </div>
  );
};

const category = () => {
  return (
    <div className={styles.container}>
      {CATEGORIES_DATA.map(({ id, ...rest }) => (
        <Category key={id} {...rest} />
      ))}
    </div>
  );
};

export default category;
