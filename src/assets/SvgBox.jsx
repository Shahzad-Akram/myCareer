import React from 'react';

export const SvgBox = ({ size, children, className, rotate }) => {
  return (
    <i
      className={`d-flex ${className}`}
      style={{
        height: ` ${size}`,
        width: ` ${size}`,
        fontSize: ` ${size}`,
        transform: `
      rotate(${rotate}deg)`,
        transition: 'all 0.3s ease',
      }}
    >
      {children}
    </i>
  );
};
