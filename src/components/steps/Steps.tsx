import React, { useState } from 'react';
import { Tabs, Steps, List } from 'antd';
import ClientIcon from './client-icon.png';
import OperatorIcon from './operator-icon.png'
import StepIcon from './step-icon.png';
import './steps.css'
const { TabPane } = Tabs;
const { Step } = Steps;


interface ConditionProps {
    isShow: boolean;
}

const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

export const StepsComponent = (props: any) => {

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={(
                                <div className="icon">
                                {/* <img src={StepIcon}  /> */}
                                    <div className="icon-text">
                                        {index + 1 }     
                                    </div>
                                </div>
                                
                            )}
                            // description="Выберите страну и введите номер телефона. Нажмите «У меня нет мобильного телефона», если у вас его нет, и укажите резервную почту. "
                            description={(
                                <span className="primary-text">
                                    Выберите страну и введите номер телефона. Нажмите «У меня нет мобильного телефона», если у вас его нет, и укажите резервную почту.
                                </span>
                            )}
                        />
                    </List.Item>
                )}
            />
        </>

    )
}

