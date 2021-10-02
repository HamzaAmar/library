import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import type { ThumbnailProps } from './thumbnail.interface';
import styles from './thumbnail.module.css';
import Avatar from '../avatar';

enum Status {
  Pending = 'PENDING',
  Success = 'Success',
  Error = 'Error'
}
const VERTICAL_OFFSET = '0.35em';

const thumbnail = ({
  label,
  size = 'medium',
  source,
  onError,
  initials
}: ThumbnailProps) => {
  const root = cn(styles.avatar, {
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large'
  });
  const [status, setStatus] = useState<Status>(Status.Pending);
  const hasImage = source && status !== Status.Error;

  useEffect(() => {
    setStatus(Status.Pending);
  }, [source]);

  const handleError = () => {
    setStatus(Status.Error);
    if (onError) {
      onError();
    }
  };
  const handleLoad = () => {
    setStatus(Status.Success);
  };

  const imageMarkUp =
    source && status !== Status.Error ? (
      <img
        className={styles.Image}
        src={source}
        alt=""
        role="presentation"
        onLoad={handleLoad}
        onError={handleError}
      />
    ) : null;

  const avatarBody = !initials ? (
    <path
      fill="currentColor"
      d="M8.28 27.5A14.95 14.95 0 0120 21.8c4.76 0 8.97 2.24 11.72 5.7a14.02 14.02 0 01-8.25 5.91 14.82 14.82 0 01-6.94 0 14.02 14.02 0 01-8.25-5.9zM13.99 12.78a6.02 6.02 0 1112.03 0 6.02 6.02 0 01-12.03 0z"
    />
  ) : (
    <text
      x="50%"
      y="50%"
      dy={VERTICAL_OFFSET}
      fill="currentColor"
      fontSize="20"
      textAnchor="middle"
    >
      {initials}
    </text>
  );

  const svgMarkup = !hasImage ? (
    <span className={styles.Initials}>
      <AvatarIcon />
    </span>
  ) : null;

  return (
    <div>
      <span aria-label={label} role="img" className={root}>
        {svgMarkup}
        {imageMarkUp}
      </span>
    </div>
  );
};

export default thumbnail;
