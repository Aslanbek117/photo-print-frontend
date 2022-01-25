import React from 'react';
import { Spin } from 'antd';
import './styles.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <Spin size={'large'} tip="Загрузка..." />
    </div>
  );
};

export default Loader;
