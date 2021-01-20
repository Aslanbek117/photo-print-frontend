import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import YandexMap  from '../departments/Department';
import SearchIcon from './search-icon-2.png';
import './style.css';

interface ModalProps {
    isVisible: boolean;
    onOk: () => void;
    onCancel: () => void;
    title: string;
}

export const DepartmentModal = (props: ModalProps) => {
    const [searchValue, setSearchValue] = useState<string>('');



    return (
        <>
            <Modal title={props.title} visible={props.isVisible} onOk={props.onOk} onCancel={props.onCancel} footer={null} style={{minHeight: 620}}>
                <div className="search-input-modal" >
                    <i className="search-icon-modal">
                        <img src={SearchIcon} />
                    </i>
                    <input className="search-input-field-modal" placeholder="Введите адрес" value={searchValue} onChange={(event) => {
                        setSearchValue(event.target.value);
                    }}
                    />
                </div>
                <div style={{marginTop: 48, height: '100%'}}>
                    <YandexMap />
                </div>

            </Modal>
        </>
    )
}