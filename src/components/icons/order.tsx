import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M351 447H18l18-326h118l15 7 15-8h147z" fill="#ff3d58" />
      <path d="M351 447H184V121h147z" fill="#d20173" />
      <circle cx={363.7} cy={381.5} fill="#97cbff" r={130.5} />
      <path
        d="M494 382c0 72-58 130-130 130V251c72 0 130 58 130 131z"
        fill="#7f7cff"
      />
      <path
        d="M429 354l-65 65-12 11-53-53 21-21 32 32 12-12 44-43z"
        fill="#f1f1f1"
      />
      <path d="M429 354l-65 65v-43l44-43z" fill="#d6d6ea" />
      <path
        d="M274 90v106h-30V90a60 60 0 00-119 0v106H95V90a90 90 0 01179 0z"
        fill="#4e588b"
      />
      <path
        d="M274 90v106h-30V90c0-33-27-60-60-60V0c50 0 90 40 90 90z"
        fill="#293e65"
      />
      <path d="M154 121h30v75h-30z" fill="#4e588b" />
      <path d="M202 207v77h-65v-77l32-21z" fill="#fe0" />
      <path d="M202 207v77h-33v-98z" fill="#fc0" />
    </svg>
  );
}

export default SvgComponent;
