import React, { FC } from 'react';

const Icon: FC<SvgProps> = ({
  icon,
  height = 28,
  width = 28,
  className = '',
  onClick,
  fill = 'none',
  mr,
  ml,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    onClick={onClick}
    fill={fill}
    style={{ marginLeft: ml, marginRight: mr }}
  >
    <use xlinkHref={`/i/sprite.svg#${icon}`} />
  </svg>
);

export default Icon;

interface SvgProps {
  icon: string;
  height?: number | string;
  width?: number | string;
  className?: string;
  onClick?: () => void;
  fill?: string;
  mr?: number;
  ml?: number;
}
