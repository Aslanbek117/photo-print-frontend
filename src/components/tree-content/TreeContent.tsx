import React, { useState } from 'react';

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
}

export const TreeContent = (props: TreeContentProps) => {
    const [loading, SetLoading] = useState(false);


    const [selectedNavItem, setSelectedNavItem] = useState<string>('');


    const [searchText, setSearchText] = useState('');

    const [articleClicked, setArticleClicked] = useState(false);

    const onSelect = (selectedKeys: any, info: any) => {
        let index = selectedKeys.toString().lastIndexOf("/") + 1
        let navItem = selectedKeys.toString().slice(index, selectedKeys.toString().length);
        console.log("category", navItem);
        setSelectedNavItem(navItem)
        setArticleClicked(false);
    };

    const onArticleClick = (title: string) => {
        console.log("article click", title);
        setArticleClicked(true);
    }

    return (
        <>
            <Layout>

                <Sider theme='light' style={{ borderTopLeftRadius: '24px', paddingTop: '20px' }}>
                    <span style={{ fontFamily: 'Roboto', fontSize: "14px", lineHeight: '20px !important', letterSpacing: "-0.4px/" }}>
                        {/* <ArrowLeftOutlined style={{ paddingLeft: '5px', marginRight: '10px' }} /> */}
                        <img src={ArrowLeft} style={{ paddingLeft: '5px', width: 18, height: 12 }} />
                        <span style={{ paddingLeft: '5px' }}>
                            Вернуться на главную
                        </span>
                    </span>
                    <div style={{paddingTop: '15px'}}>
                        {loading ? null : (
                            <TreeView onSelect={onSelect} treeData={[]} token="" items={props.treeData} />
                        )}
                    </div>
                </Sider>

                <Divider type="vertical" style={{ height: "100%", margin: "0 0px" }} />
                <Content style={{ padding: '0 24px', minHeight: 280, backgroundColor: 'white', paddingTop: '15px', borderTopRightRadius: '24px' }} >



                    {articleClicked ? (
                        <Article />
                    ) : (
                            <>
                                <Typography>
                                    {props.items.length == 0 ? (
                                        <span className="title">
                                            В Базе знаний нет статьи по запросу "{searchText}"
                            </span>
                                    ) : ''}

                                    <Title> {selectedNavItem} </Title>
                                    {(props.items.length == 1) ? (

                                        <Text strong={true} style={{ backgroundColor: "rgb(249,250,250)", color: "black !important" }}>
                                            найдена: 1 статья
                            </Text>
                                    ) : (

                                            <Text strong={true} style={{ backgroundColor: "rgb(249,250,250)", color: "black !important" }}>
                                                найдено: {props.items.length} статьи
                                </Text>
                                        )}
                                </Typography>
                                <Divider type="horizontal" />

                                <ItemList items={props.items} onClick={onArticleClick} />
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
