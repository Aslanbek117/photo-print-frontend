import React, { useState, useEffect } from 'react';

import { AutoComplete, Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Search } from '../backend-api/api';
import { SearchResponseDTO } from '../../models/search/Search';
import HeaderTemp from '../header-temp/HeaderTemp';
import './search.css';

const mockVal = (str: string[], repeat: number = 1) => {

    return {
        value: str[0] || "",
    };
};



export const SearchTop = (props: any) => {



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



    return (
        <>
            {/* <div className="search-title">
                Добро пожаловать в "Базу знаний" */}
    
            <div className="search-input">
                    <i className="search-icon fas fa-search fa-lg" />
                    {/* <input className="search-input-field" placeholder="Напишите вопрос или проблему"/> */}

                    <AutoComplete
                        options={options}
                        // style={{ width: 300 }}
                        onSelect={onSelect}
                        onSearch={onSearch}
                        bordered={false}
                        placeholder="Напишите вопрос или проблему"
                        className="search-input-field"
                    />
                    <button className="search-button" >
                        <span className="search-button-text">
                            Поиск
                    </span>
                    </button>
                </div>
            {/* </div> */}
        </>
    )
}

