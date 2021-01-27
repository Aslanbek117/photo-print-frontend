import React, { ReactText } from 'react';
import './styles.css';

const Text = ({
  children,
  type,
  color,
  style,
}: {
  children: ReactText | any;
  type?: 'title' | 'subtitle1' | 'subtitle2' | 'small' | 'article-breadcrumb';
  color?: string;
  style?: any;
}) => {
  return (
    <p className={type || 'default'} style={{ color, ...style }}>
      {children}
    </p>
  );
};

export default Text;
