import React, { useState } from 'react';
import { Tabs } from 'antd';
import ClientIcon from './client-icon.png';
import OperatorIcon from './operator-icon.png'
import { StepsComponent } from '../steps/Steps';
import './process.css';
import { ProcessModel } from '../../models/search/Search';
const { TabPane } = Tabs;


interface ProcessProps {
    data: ProcessModel[];
}

export const Process = (props: ProcessProps) => {

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
                    <StepsComponent  data={props.data} />
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
                    <StepsComponent data={props.data} />
                 </TabPane>
            </Tabs>
        </>

    )
}

