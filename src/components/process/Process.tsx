import React, { useState } from 'react';
import { Tabs } from 'antd';
import ClientIcon from './client-icon.png';
import OperatorIcon from './operator-icon.png'
import { StepsComponent } from '../steps/Steps';
import './process.css';
const { TabPane } = Tabs;


interface ConditionProps {
    isShow: boolean;
}

export const Process = (props: any) => {

    return (
        <>
            <Tabs defaultActiveKey="1" tabBarStyle={{}}>
                <TabPane
                    tab={
                        <span>
                            <img src={ClientIcon} style={{marginRight: 10}}/>
                            Клиентская
                         </span>
                    }
                    key="1"
                >
                    <StepsComponent />
                 </TabPane>
                <TabPane
                    tab={
                        <span>
                            <img src={OperatorIcon} style={{marginRight: 10}}/>
                            Операторская
                        </span>
                    }
                    key="2"
                >
                    <StepsComponent />
                 </TabPane>
            </Tabs>
        </>

    )
}

