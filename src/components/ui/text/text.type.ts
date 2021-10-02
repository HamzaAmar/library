import React from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Color = 'dark' | 'main' | 'light' | 'success' | 'danger' | 'warning';

export interface TextProps<T extends React.ElementType = React.ElementType> {
  size?: Size;
  children: React.ReactNode;
  as?: T;
  color?: Color;
  className?: string;
}
