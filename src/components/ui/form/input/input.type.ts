import React, { InputHTMLAttributes } from 'react';

type Size = 'small' | 'medium' | 'large' | 'fluid';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: Size;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
