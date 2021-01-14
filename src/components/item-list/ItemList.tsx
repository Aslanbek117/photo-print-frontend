import React, { useState } from 'react';

import { SearchTop } from '../search/Search';
import { Category } from '../category/Category';

import { Typography, Breadcrumb, List, Pagination } from 'antd';
import Title from 'antd/lib/typography/Title';


const listData: any[] = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        // href: 'https://ant.design',
        title: `Заголовок 1 ${i}`,
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'Разнообразный и богатый опыт укрепление и развитие структуры способствует подготовки и реализации соответст...',
    });

}

export const ItemList = (props: any) => {

    return (
        <>

            <List
                itemLayout="vertical"
                size="small"
                pagination={
                    {
                    onChange: page => {
                        console.log(page);
                    },
                    
                    pageSize: 3,
                }
                // <Pagination defaultCurrent={1} total={50} />
            }
                dataSource={listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        style={{ paddingLeft: '0' }}
                    >
                        <List.Item.Meta
                            title={<a href={item.href} style={{color: 'rgb(0,128,96)'}}>{item.title}</a>}
                            description={<>
                                <Breadcrumb>
                                    <Breadcrumb.Item>Кредиты</Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <a href="">Кредитные карты</a>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <a href="">Секс шоп</a>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </>}
                        />
                        {item.content}
                    </List.Item>
                )} />
        </>

    )
}

