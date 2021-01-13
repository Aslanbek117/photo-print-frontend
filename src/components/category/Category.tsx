import React, { useState } from 'react';

import { Form, Input, Button, AutoComplete, Avatar } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Search } from '../backend-api/api';
import { SearchResponseDTO } from '../../models/search/Search';
import HeaderTemp from '../header-temp/HeaderTemp';
import { Card, Col, Row, Space, List } from 'antd';
import "./category.css";

const fakeData = [
    {
        id:1, 
        title: "Экспресс кредиты",
        description: "Экспресс кредиты",
        content: 5
    }, 
    {
        id: 2, 
        title: "Кредитые карты",
        description: "Кредитные карты",
        content: 5
    }, 
    {
        id: 3, 
        title: "Halyk light",
        description: "Halyk light",
        content: 5
    }, 
]

export const Category = (props: any) => {

    return (
        <>
            <div className="">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title={
                            <span className="category-card-title" >Кредиты</span>
                        } bordered={false} style={{ backgroundColor: 'rgb(235,243,243)' }}
                        bodyStyle={{paddingTop: "0"}}
                        >
                            <List
                                 dataSource={fakeData}
                                renderItem={item => (
                                    <List.Item key={"x"}>
                                        <List.Item.Meta
                                            title={<span className="category-card-item"> {item.title} </span>}
                                        />
                                <div>{item.content}</div>
                                    </List.Item>
                                )}
                            >
                            </List>
                            Все разделы
                         </Card>
                    </Col>
                    <Col span={8}>
                    <Card title={
                            <span className="category-card-title" >Кредиты</span>
                        } bordered={false} style={{ backgroundColor: 'rgb(235,243,243)' }}
                        bodyStyle={{paddingTop: "0"}}
                        >
                            <List
                                 dataSource={fakeData}
                                renderItem={item => (
                                    <List.Item key={"x"}>
                                        <List.Item.Meta
                                            title={<span className="category-card-item"> {item.title} </span>}
                                        />
                                <div>{item.content}</div>
                                    </List.Item>
                                )}
                            >
                            </List>
                            Все разделы
                         </Card>
                    </Col>
                    <Col span={8}>
                    <Card title={
                            <span className="category-card-title" >Кредиты</span>
                        } bordered={false} style={{ backgroundColor: 'rgb(235,243,243)' }}
                        bodyStyle={{paddingTop: "0"}}
                        >
                            <List
                                 dataSource={fakeData}
                                renderItem={item => (
                                    <List.Item key={"x"}>
                                        <List.Item.Meta
                                            title={<span className="category-card-item"> {item.title} </span>}
                                        />
                                <div>{item.content}</div>
                                    </List.Item>
                                )}
                            >
                            </List>
                            Все разделы
                         </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

