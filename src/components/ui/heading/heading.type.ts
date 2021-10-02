import React, { HTMLAttributes } from 'react';

type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type Color = 'dark' | 'main' | 'light' | 'success';
type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: Size;
  children: React.ReactNode;
  as?: As;
  color?: Color;
}
