import React from 'react';

interface Props {
  size: number;
  mode?: 'light' | 'dark';
}

const Logo: React.FC<Props> = ({ size, mode = 'light' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="24"
      height="24"
      rx="8"
      stroke={mode === 'light' ? '#0073FF' : '#FFFFFF'}
      strokeWidth="4"
    />
    <rect
      x="13"
      y="3"
      width="12"
      height="12"
      rx="6"
      stroke={mode === 'light' ? '#0073FF' : '#FFFFFF'}
      strokeWidth="4"
    />
  </svg>
);

export default Logo;
