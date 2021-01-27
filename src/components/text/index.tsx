import React, { ReactText } from 'react';
import './styles.css';

const Text = ({
  children,
  type,
}: {
  children: ReactText | any;
  type?: 'title' | 'subtitle1' | 'subtitle2' | 'small' | 'article-breadcrumb';
}) => {
  return <p className={type || 'default'}>{children}</p>;
};

export default Text;
