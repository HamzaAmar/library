import React from 'react';
import styles from './plans.module.css';
import PLANS_DATA, { PlanType } from '@constants/plans';
import { Button } from '@components/ui';

const Plan = ({ title, price, list, pricePer }: Omit<PlanType, 'id'>) => {
  return (
    <div className={styles.plan}>
      <h1 className={styles.heading}>{title}</h1>
      <p>
        <span className={styles.price}>${Number(price).toFixed(2)}</span>
        {pricePer}
      </p>
      <ul className={styles.list}>
        {list.map((lst) => (
          <li className={styles.item} key={lst.id}>
            {lst.title}
          </li>
        ))}
      </ul>
      <Button size="medium" radius="rounded">
        Buy Now
      </Button>
    </div>
  );
};

const plans = () => {
  return (
    <div className={styles.container}>
      {PLANS_DATA.map(({ id, ...rest }) => (
        <Plan key={id} {...rest} />
      ))}
    </div>
  );
};

export default plans;
