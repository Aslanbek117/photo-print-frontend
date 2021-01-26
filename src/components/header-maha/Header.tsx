import React, { useState, useEffect } from "react";
import Icon from "../icon";
import Text from "../text";
import { Form, Button } from "antd";

import { DepartmentModal } from "../modals/DepartmentModal";
import "./header.css";

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
          <div className="logo">
            <a href="/">
              <Icon icon="logo" width={108} height={38} />
            </a>
          </div>

          {/* 


            другие хидеры верстать не надо,
            если надо будет я ими сам займусь
            у меня на них большие планы))

            приглядись к этой кнопке
            я закомментил некоторые свойства
            вроде исправилось
            но все же посмотри
            (мб конфликт стилей?)

          */}
          <Button
            type="primary"
            shape="round"
            size={"large"}
            style={{
              float: "right",
              backgroundColor: "rgb(237,237,239)",
              color: "black",
              //   fontFamily: "Roboto",
              //   fontSize: "14px;",
              //   lineHeight: "18px;",
              border: "none",
            }}
            onClick={() => setIsModalVisible(true)}
          >
            <Text type="subtitle2">Филиалы</Text>
          </Button>
        </div>
      </div>

      {isModalVisible && (
        <DepartmentModal
          title={"Филиалы"}
          isVisible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};
