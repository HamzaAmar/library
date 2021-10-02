import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 -10 512 511" {...props}>
      <path
        d="M511 186c-4-10-13-18-24-19l-148-13-58-137a27 27 0 00-50 0l-58 137-148 13a27 27 0 00-16 48l112 98-33 145a27 27 0 0041 29l127-76 127 76a27 27 0 0041-29l-33-145 112-98c8-7 11-19 8-29zm0 0"
        fill="#ffc107"
      />
    </svg>
  );
}

export default SvgComponent;
