import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <g clipRule="evenodd" fillRule="evenodd">
        <path d="M10 170h170l12-160H64z" fill="#ffc144" />
        <path d="M192 10l-12 160h100L268 10z" fill="#ff5d7d" />
        <path
          d="M268 10l12 160h170L396 10zm182 160H280v60h170z"
          fill="#ffc144"
        />
        <path d="M180 170h100v60H180z" fill="#ff5d7d" />
        <path
          d="M180 230v-60H10v60h23zm0 0H33v180h250l-1-18a110 110 0 01145-104v-58H280v49c0 9-8 15-16 12l-34-14-34 14c-8 3-16-3-16-12z"
          fill="#ffc144"
        />
        <path
          d="M180 230v49c0 9 8 15 16 12l34-14 34 14c8 3 16-3 16-12v-49zm212 52a110 110 0 100 220 110 110 0 000-220z"
          fill="#ff5d7d"
        />
      </g>
      <path d="M437 281v-41h13c6 0 10-4 10-10v-60l-1-3L406 7c-2-4-5-7-10-7H64c-5 0-8 3-10 7L1 167l-1 3v60c0 6 4 10 10 10h13v170c0 6 5 10 10 10h242a120 120 0 10162-139zm-147-61v-40h150v40zm-100 20h80v39l-1 3-1-1-34-14h-8l-34 14-1 1-1-3v-39zm0-20v-40h80v40zm68-200l11 140h-78l11-140zm178 140H289L278 20h111zM71 20h111l-11 140H24zM20 220v-40h150v40zm23 180v-20h45a10 10 0 100-20H43V240h127v39c0 8 4 15 10 19s13 5 19 2l31-12 31 12 8 2a23 23 0 0021-23v-39h127v35a120 120 0 00-145 125zm349 92a100 100 0 110-200 100 100 0 010 200z" />
      <path d="M133 360a10 10 0 100 20 10 10 0 100-20zm285-8h-48l3-3a10 10 0 00-14-14l-20 20c-4 4-4 10 0 14l20 20c2 2 5 3 7 3s5-1 7-3c4-4 4-10 0-14l-3-3h48a20 20 0 010 40h-82a10 10 0 000 20h82a40 40 0 000-80z" />
    </svg>
  );
}

export default SvgComponent;
