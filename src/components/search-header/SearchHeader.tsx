import React, { useState, useEffect } from 'react';

import { AutoComplete, Form, Select } from 'antd';
import { UserOutlined, LockOutlined, PropertySafetyOutlined } from '@ant-design/icons';
import { Search } from '../backend-api/api';
import { SearchResponseDTO, SearchModel } from '../../models/search/Search';
import './style.css';
import { SearchDropdown } from '../search-dropdown/SearchDrodown';
import  SearchIcon  from './search-header-icon.png';
import { useHistory } from 'react-router-dom';

const mockVal = (str: string[], repeat: number = 1) => {

    return {
        value: str[0] || "",
    };
};



const items: any[] = [
    {
        id: 1,
        text: "first"
    },
    {
        id: 2,
        text: "second"
    },
    {
        id: 3,
        text: "third"
    },
]

interface SearchProps {
    onClick: (searchInput: string) => void;
}

export const SearchHeader = (props: SearchProps) => {

    const history = useHistory()


    const [form] = Form.useForm();

    const [searchText, setSearchText] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');
    const [suggest, setSuggest] = useState<SearchModel[]>([]);

    const onInputChange = async (event: any) => {
        const response: SearchResponseDTO = await Search("", event.target.value);
        console.log("response", response);
        // setSuggest(response.result);
    }


    const filteredItems = () => {
        // const response = await Search("", searchText);
        // console.log("response", response);

        // if (searchValue.length > 0) {
        //     return items;
        // } else {
        //     return [];
        // }

        if (suggest !== null) {
            if (suggest.length > 0) {
                return suggest;
            } else {
                return [];
            }
        }

        return [];
    }

    return (
        <>
            <div className="search-input-header" style={{ boxShadow: filteredItems().length > 0 ? '0px 4px 20px rgba(0, 0, 0, 0.16)' : 'none' }}>
                <i className="search-icon-header">
                    <img src={SearchIcon} />
                </i>
                <input className="search-input-field-header" placeholder="Напишите вопрос или проблему" value={searchValue} onChange={(event) => {
                    if (event.target.value == "") {
                        setSuggest([]);
                    } else {
                        onInputChange(event)
                    }
                    setSearchValue(event.target.value);
                    
                }}

                />
                {/* <SearchDropdown items={filteredItems()} /> */}
                <button className="search-button-header" onClick={() => {
                    props.onClick(searchValue)
                    history.push("/nav/" + searchValue)
                }} >
                    <span className="search-button-text-header">
                        Поиск
                    </span>
                </button>
            </div>
        </>
    )
}

