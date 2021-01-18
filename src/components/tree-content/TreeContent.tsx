import React, { useState, useEffect } from 'react';

import { Layout, Typography, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';
import { TreeView } from '../tree-nav/TreeNav';
import { ItemList } from '../item-list/ItemList';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Article } from '../article/Article';
import { SearchModel } from '../../models/search/Search';
import "./style.css";
import ArrowLeft from './arrow-left.png';
const { Content, Sider } = Layout;

const { Text } = Typography;

interface TreeContentProps {
    treeData: any[];
    items: SearchModel[];
    loading: boolean;
    searchText: string;
}

export const TreeContent = (props: TreeContentProps) => {
    const [loading, SetLoading] = useState(false);


    const [selectedNavItem, setSelectedNavItem] = useState<string>('');

    const [navItemClicked, setNavItemClicked] = useState<boolean>(false);

    const [navMenuClicked, setNavMenuClicked] = useState<boolean>(false);

    const [items, setItems] = useState<any[]>([]);


    const [searchText, setSearchText] = useState('');

    const [articleClicked, setArticleClicked] = useState(false);

    const onSelect = (selectedKeys: any, info: any) => {
        let index = selectedKeys.toString().lastIndexOf("/") + 1
        let navItem = selectedKeys.toString().slice(index, selectedKeys.toString().length);
        console.log("category", navItem);
        setSelectedNavItem(navItem)
        setNavItemClicked(true);
        setArticleClicked(false);
        
    };

    const onArticleClick = (title: string) => {
        console.log("article click", title);
        setArticleClicked(true);
    }

    useEffect(() => {
        setItems(props.items);
    }, [])

    return (
        <>
            <Layout>

                <Sider theme='light' width={300} style={{ borderTopLeftRadius: '24px', paddingTop: '20px' }}>
                    <span style={{ fontFamily: 'Roboto', fontSize: "16px", lineHeight: '20px !important', letterSpacing: "-0.4px/" }}>
                        {/* <ArrowLeftOutlined style={{ paddingLeft: '5px', marginRight: '10px' }} /> */}
                        <img src={ArrowLeft} style={{ paddingLeft: '5px', width: 18, height: 12 }} />
                        <span style={{ paddingLeft: '5px' }}>
                            <a href="/">
                                Вернуться на главную
                            </a>
                        </span>
                    </span>
                    <div style={{ paddingTop: '15px' }}>
                        {props.loading ? 'loading xui' : (
                            <TreeView loading={props.loading} onSelect={onSelect} treeData={props.treeData} token="" items={props.treeData} />
                        )}
                    </div>
                </Sider>

                <Divider type="vertical" style={{ height: "100%", margin: "0 0px" }} />
                <Content style={{ padding: '0 24px', minHeight: 700, backgroundColor: 'white', borderTopRightRadius: '24px' }} >
                    {articleClicked ? (
                        <Article />
                    ) : (
                            <>
                                <Typography>
                                    {props.items.length == 0 ? (
                                        props.searchText == "" ? null : (
                                            <span className="title">
                                                В Базе знаний нет статьи по запросу "{props.searchText}"
                                             </span>
                                        )
                                    ) : ''}

                                    <Title> {selectedNavItem} </Title>

                                    {(props.items.length == 1) ? (
                                        <>
                                            <Title> {props.searchText} </Title>
                                            <Text strong={true} style={{ backgroundColor: "rgb(249,250,250)", color: "black !important" }}>
                                                найдена: 1 статья
                                            </Text>
                                        </>
                                    ) : (
                                            props.items.length == 0 ? (
                                                <Text strong={true} style={{ backgroundColor: "rgb(249,250,250)", color: "black !important" }}>
                                                    найдено: {props.items.length} статей
                                             </Text>
                                            ) : (
                                                    <Text strong={true} style={{ backgroundColor: "rgb(249,250,250)", color: "black !important" }}>
                                                        найдено: {props.items.length} статьи
                                                </Text>
                                                )
                                        )}
                                </Typography>
                                <Divider type="horizontal" />

                                <ItemList items={props.items} onClick={onArticleClick} navItemClicked={navItemClicked} />
                            </>
                        )}

                </Content>
            </Layout>
            {/* <Article /> */}
        </>
    )
}



//

// */}
