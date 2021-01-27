import React, { ReactText } from 'react';
import './styles.css';

const Text = ({
  children,
  type,
  color,
  style,
  onClick,
}: {
  children: ReactText | any;
  type?: 'title' | 'subtitle1' | 'subtitle2' | 'small' | 'article-breadcrumb';
  color?: string;
  style?: any;
  onClick?: () => void;
}) => {
  return (
    <p
      className={type || 'default'}
      style={{ color, ...style, cursor: onClick && 'pointer' }}
      onClick={() => onClick && onClick()}
    >
      {children}
    </p>
  );
};

export default Text;
