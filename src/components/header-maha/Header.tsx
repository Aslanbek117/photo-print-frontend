import React, { useState } from 'react';
import { Button } from 'antd';

import Icon from '../icon';
import Text from '../text';
import { SearchTop } from '../search/Search';
import { DepartmentModal } from '../modals/DepartmentModal';
import './header.css';

interface HeaderProps {
  // isSearchVisible: boolean -- я буду использовать этот хидер для поиска в шапке страницы либо напишу свой кастомный
  // на данный момент не пытайся скрыть поиск через свойства
  // сверстай поиск и закомменть его - я позже решу что с ним делать
}

export const Header = (props: HeaderProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="header">
        <div className="main-container">
          <div className="header-inner-container">
            <div className="logo">
              <a href="/">
                <Icon icon="logo" width={108} height={38} />
              </a>
            </div>

            {/* <SearchTop header /> */}

            <Button
              type="primary"
              shape="round"
              size="large"
              className="header-filter-button"
              onClick={() => setIsModalVisible(true)}
            >
              <Text type="subtitle2" color="#171717">
                Филиалы
              </Text>
            </Button>
          </div>
        </div>
      </div>

      {isModalVisible && (
        <DepartmentModal
          title={'Филиалы'}
          isVisible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};
