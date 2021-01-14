import React, { useState, useEffect } from 'react';

import { Form, Input, Button, AutoComplete, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Search } from '../backend-api/api';
import { SearchResponseDTO } from '../../models/search/Search';
import "./main.css";
import HeaderTemp from '../header-temp/HeaderTemp';
import { SearchTop } from '../search/Search';
import { Category } from '../category/Category';
import HalykLogo from './halyk-logo.png';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import Title from 'antd/lib/typography/Title';
import { useHistory, useLocation } from "react-router-dom";
import { TreeView } from '../tree-nav/TreeNav';
import { TreeContent } from '../tree-content/TreeContent';


const { Header, Content, Footer } = Layout;
const { Text, Link } = Typography;


const mockVal = (str: string[], repeat: number = 1) => {

    return {
        value: str[0] || "",
    };
};


export const MainPage = (props: any) => {
    let history = useHistory();
    let location = useLocation();


    const [form] = Form.useForm();

    const [value, setValue] = useState('');
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const onSearch = async (searchText: string) => {

        const response: SearchResponseDTO = await Search("", searchText);
        setOptions(
            !searchText ? [] : [mockVal(response.result)],
        );
    };
    const onSelect = (data: string) => {
    };
    const onChange = (data: string) => {
        setValue(data);
    };

    const renderItem = (title: string, count: number) => {
        return {
            value: title,
            label: (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    {title}
                    <span>
                        <UserOutlined /> {count}
                    </span>
                </div>
            ),
        };
    };

    useEffect(() => {
        console.log("location", location.pathname);
        // setTreeData(props.treeData)
    }, [])


    return (
        <>
            <Layout className="layout" >
                <Header style={{ background: '#fff' }}>
                    <div className="logo" >
                        <a>
                            <img
                                alt="halyk-wiki"
                                src={HalykLogo} />
                        </a>
                    </div>
                    <Button type="primary" shape="round" size={'large'} style={{
                        float: 'right', marginTop: '13px', backgroundColor: 'rgb(237,237,239)', color: 'black', fontFamily: 'Roboto',
                        fontSize: '14px;',
                        lineHeight: '18px;'
                    }}>
                        <Text strong>Филиалы</Text>
                    </Button>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">

                        {location.pathname == "/" ? (
                            <div>
                                <Typography>
                                    <Title>Добро пожаловать в "Базу знаний"</Title>
                                </Typography>
                                <SearchTop />
                                <div style={{ paddingTop: "50px" }}>
                                </div>
                                <Typography>
                                    <Title>Поиск по категориям</Title>
                                </Typography>
                                <Category />
                            </div>
                        ) : (

                            <TreeContent />
                        )}

                    </div>
                </Content>
            </Layout>
        </>
    )
}

