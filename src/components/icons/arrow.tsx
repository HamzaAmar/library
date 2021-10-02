import * as React from 'react';

function arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 64 64" {...props}>
      <path d="M37.4 12.6a2 2 0 10-2.8 2.8L50 30H10a2 2 0 000 4h39.9L34.6 48.6a2 2 0 102.8 2.8l17.4-16.6a4 4 0 000-5.7z" />
    </svg>
  );
}

export default arrow;
