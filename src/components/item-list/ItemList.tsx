import React, { useState } from 'react';

import { SearchTop } from '../search/Search';
import { Category } from '../category/Category';

import { Typography, Breadcrumb, List, Pagination } from 'antd';
import Title from 'antd/lib/typography/Title';
import { SearchModel } from '../../models/search/Search';
import NotFound from './not_found.png';
import './styles.css';
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

interface ItemProps { 
    items: SearchModel[];
    onClick: (title: string) => void;
}

export const ItemList = (props: ItemProps) => {

    return (
        <>

            {props.items.length == 0  ? (
                <>
                <div>
                <img src={NotFound} />
                  <span className="text" style={{paddingLeft: 20}}>
                  Попробуйте еще раз! Либо найдите нужную статью в категории
                </span>
                </div>
                </>
            ) : (
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
                
                dataSource={props.items}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        style={{ paddingLeft: '0' }}
                    >
                        <List.Item.Meta
                            title={<a style={{color: 'rgb(0,128,96)'}} onClick={ () => props.onClick(item.title)}>{item.title}</a>}
                            description={<>
                                <Breadcrumb>
                                    <Breadcrumb.Item> {item.entity_name} </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <a href=""> {item.category_name}  </a>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <a href=""> {item.subcategory_name} </a>
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </>}
                        />
                        {item.title}
                    </List.Item>
                )} />
            )}

           
        </>

    )
}

