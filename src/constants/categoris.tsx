import { Books, FastDelivery, Gift, Order, ReturnBox } from '@components/icons';
import React from 'react';

export interface CategoryType {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const CATEGORIES_DATA: CategoryType[] = [
  {
    id: 1,
    title: 'Free Gift Wrapper',
    icon: (
      <Gift
        width="30"
        style={{
          filter: 'drop-shadow(0 0.25rem 0.2rem var(--primary-color-main))'
        }}
      />
    )
  },
  {
    id: 2,
    title: 'Online Ordering',
    icon: (
      <Order
        width="30"
        style={{
          filter: 'drop-shadow(0 0.25rem 0.2rem var(--primary-color-main))'
        }}
      />
    )
  },
  {
    id: 3,
    title: 'Used Book Buying',
    icon: (
      <Books
        width="30"
        style={{
          filter: 'drop-shadow(0 0.25rem 0.2rem var(--primary-color-main))'
        }}
      />
    )
  },
  {
    id: 4,
    title: 'Returns && Exchanges',
    icon: (
      <ReturnBox
        width="30"
        style={{
          filter: 'drop-shadow(0 0.25rem 0.2rem var(--primary-color-main))'
        }}
      />
    )
  },
  {
    id: 5,
    title: 'Fast Delivery',
    icon: (
      <FastDelivery
        width="30"
        style={{
          filter: 'drop-shadow(0 0.25rem 0.2rem var(--primary-color-main))'
        }}
      />
    )
  }
];

export default CATEGORIES_DATA;
