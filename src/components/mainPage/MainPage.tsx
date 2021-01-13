import React, { useState } from 'react';

import { Form, Input, Button, AutoComplete, Space } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Search } from '../backend-api/api';
import { SearchResponseDTO } from '../../models/search/Search';
import "./main.css";
import HeaderTemp from '../header-temp/HeaderTemp';
import { SearchTop } from '../search/Search';
import { Category } from '../category/Category';

const mockVal = (str: string[], repeat: number = 1) => {

    return {
        value: str[0] || "",
    };
};


export const MainPage = (props: any) => {
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


    return (
        <>
            <HeaderTemp user={{} as any} cityId={2} />
            <div className="container">

                <SearchTop />
                <div className="access">

                </div>

                <div className="title">
                    Поиск по категориям
            <div className="access">

                    </div>
                    <div className="access">

                    </div>
                    <Category />
                </div>


            </div>
            {/* <div className="container"> 

            <div className="main">
                <div className="main-title">
                    Добро пожаловать в "Базу знаний"
                </div>
                <div className="main-search-input">
                    <div className="search-content">

                        <i className="fas fa-search" />
                        <input id="username"
                            placeholder="Напишите вопрос или проблему"
                            className="" style={{ border: 0, marginLeft: '20px' }}
                            size={100} />
                        <button className="header-button1" style={{ float: 'right' }}>
                            Поиск
                        </button>
                    </div>
                </div>
            </div>

         </div>  */}
        </>
    )
}

