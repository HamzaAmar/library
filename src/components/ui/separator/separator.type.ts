import React from 'react';

type Orientation = 'horizontal' | 'vertical';

export interface SeparatorProps {
  orientation?: Orientation;
  className?: string;
  title?: string;
}
