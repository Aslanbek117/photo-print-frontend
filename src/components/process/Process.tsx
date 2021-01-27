import React, { useState } from 'react';
import { Tabs } from 'antd';
import { StepsComponent } from '../steps/Steps';
import Icon from '../icon';
import Text from '../text';
import './process.css';
import { ProcessModel } from '../../models/search/Search';
const { TabPane } = Tabs;

interface ProcessProps {
  data?: ProcessModel[];
}

export const Process = (props: ProcessProps) => {
  const [activeTabKey, setActiveTabKey] = useState('1');
  return (
    <>
      <Tabs defaultActiveKey="1" onChange={(key) => setActiveTabKey(key)}>
        <TabPane
          tab={
            <div className="process-tab-container">
              <Icon
                icon={activeTabKey === '1' ? 'active-green-person' : 'inactive-person'}
                width={20}
                height={20}
                mr={10}
              />
              <Text type="subtitle3">Клиентская</Text>
            </div>
          }
          key="1"
        >
          {props.data !== null ? <StepsComponent data={props.data!} /> : ''}
        </TabPane>
        <TabPane
          tab={
            <div className="process-tab-container">
              <Icon
                icon={activeTabKey === '2' ? 'active-green-operator' : 'inactive-operator'}
                width={20}
                height={21}
                mr={10}
              />
              <Text type="subtitle3">Операторская</Text>
            </div>
          }
          key="2"
        >
          {props.data !== null ? <StepsComponent data={props.data!} /> : ''}
        </TabPane>
      </Tabs>
    </>
  );
};
