import React, { useState } from 'react';
import { Tabs, Steps, List, Image } from 'antd';
import ClientIcon from './client-icon.png';
import OperatorIcon from './operator-icon.png'
import StepIcon from './step-icon.png';
import './steps.css'
import { ProcessModel } from '../../models/search/Search';
const { TabPane } = Tabs;
const { Step } = Steps;


interface StepsProps {
    data: ProcessModel[];
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

export const StepsComponent = (props: StepsProps) => {

    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={props.data}
                renderItem={(item, index) => (
                    <>
                        <List.Item>
                            <List.Item.Meta
                                avatar={(
                                    <div className="icon">
                                        {/* <img src={StepIcon}  /> */}
                                        <div className="icon-text">
                                            {index + 1}
                                        </div>
                                    </div>

                                )}
                                // description="Выберите страну и введите номер телефона. Нажмите «У меня нет мобильного телефона», если у вас его нет, и укажите резервную почту. "
                                description={(
                                    <>
                                        <span className="primary-text">
                                            {item.description}

                                        </span>
                                        <br />
                                        {item.files.map(f => (

                                            <>
                                                <div style={{ display: 'inline-block' }}>

                                                    <div className="img-border">
                                                        <Image
                                                            width={36}
                                                            className="img-style"
                                                            src={"http://halyk-wiki.cfp.corp.p-s.kz/file-server/" + f.full_directory}
                                                        />
                                                        <span className="img-title"> {f.name} </span>
                                                    </div>

                                                </div>
                                            </>
                                        ))}
                                    </>
                                )}
                            />
                        </List.Item>
                    </>


                )}
            />
        </>

    )
}

