import React, { useState } from 'react';

import { SearchTop } from '../search/Search';
import { Category } from '../category/Category';

import { Typography, Breadcrumb, List, Pagination } from 'antd';
import Title from 'antd/lib/typography/Title';
import { SearchModel, SubcategoryArticles, Article as ArticleModel } from '../../models/search/Search';
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
    items: any[];
    onClick: (article_id: number) => void;
    navItemClicked: boolean;
    isLoading: boolean;
}

export const ItemList = (props: ItemProps) => {
    return (
        <>
         {
                props.items == null   && !props.navItemClicked ? (
                    <>
                        <div>
                            <img src={NotFound} />
                            <span className="text" style={{ paddingLeft: 20 }}>
                                Попробуйте еще раз! Либо найдите нужную статью в категории
                        </span>
                        </div>
                    </>
                ) : ''
            }  
            {props.isLoading ? 'loading' : (
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
                            }
                            dataSource={props.items}
                            locale={{emptyText: "В данной категории отсутствуют статьи"}}
                            renderItem={item => (
                                <List.Item
                                    key={item.title}
                                    style={{ paddingLeft: '0' }}
                                >
                                    <List.Item.Meta
                                        title={<a style={{ color: 'rgb(0,128,96)' }} onClick={() => {
                                            if (item.id === undefined) {
                                                props.onClick(item.article_id)
                                            } else {
                                                props.onClick(item.id)
                                            }
                                        }}>{item.title}</a>}
                                        description={<>
                                            <Breadcrumb>
                                                <Breadcrumb.Item> {item.path} </Breadcrumb.Item>
                                                {/* <Breadcrumb.Item>
                                                    <a href=""> {item.category_name}  </a>
                                                </Breadcrumb.Item>
                                                <Breadcrumb.Item>
                                                    <a href=""> {item.subcategory_name} </a>
                                                </Breadcrumb.Item> */}
                                            </Breadcrumb>
                                        </>}
                                    />
                                    {item.title}
                                </List.Item>
                            )} />

                            </>
                    
            )}
            

        </>

    )
}

