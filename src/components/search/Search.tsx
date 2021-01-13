import React, { useState } from 'react';

import { Form, Input, Button, AutoComplete } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Search } from '../backend-api/api';
import { SearchResponseDTO } from '../../models/search/Search';
import HeaderTemp from '../header-temp/HeaderTemp';
import './search.css';



export const SearchTop = (props: any) => {

    return (
        <>
        <div className="search-title">
            Добро пожаловать в "Базу знаний"

            <div className="search-input">
                <i className="search-icon fas fa-search fa-xs" />
                <input className="search-input-field" placeholder="Напишите вопрос или проблему"/>
                <button className="search-button" >
                    <span className="search-button-text">
                        Поиск
                    </span>
             </button>
            </div>
        </div>
        </>
    )
}

