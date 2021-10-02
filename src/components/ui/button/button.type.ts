import React from 'react';
import { ButtonHTMLAttributes } from 'react';

type Position = 'start' | 'end';
type Variant = 'contained' | 'outline' | 'text' | 'icon';
type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'transparent'
  | 'white';
type Radius = 'none' | 'rounded' | 'full';
type Size = 'small' | 'medium' | 'large' | 'fluid';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  radius?: Radius;
  icon?: React.ReactNode;
  iconPosition?: Position;
  variant?: Variant;
  color?: Color;
  size?: Size;
}
