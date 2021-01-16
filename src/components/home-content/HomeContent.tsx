import React, { useState } from 'react';

import { SearchTop } from '../search/Search';
import { Category } from '../category/Category';

import {  Typography } from 'antd';
import Title from 'antd/lib/typography/Title';




export const MainContent = (props: any) => {


    return (
        <>
            <Typography>
                <Title>Добро пожаловать в "Базу знаний"</Title>
            </Typography>
            <SearchTop onClick={() => null} />
            <div style={{ paddingTop: "50px" }}>
            </div>
            <Typography>
                <Title>Поиск по категориям ыы</Title>
            </Typography>
            <Category />
        </>
    )
}

