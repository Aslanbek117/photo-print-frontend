import React from 'react';
import Icon from '../icon';
import Text from '../text';
import { Link } from 'react-router-dom';
import './styles.css';

export const BackToMainPage = (props: any) => {
  return (
    <span className="back-to-main-container">
      <Icon icon="arrow-left" width={18} height={12} />
      <span style={{ paddingLeft: '10px' }}>
        <Link to="/">
          <Text>Вернуться на главную</Text>
        </Link>
      </span>
    </span>
  );
};
