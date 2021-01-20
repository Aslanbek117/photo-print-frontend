import React, { useState, useEffect } from 'react';

import { Layout, Typography, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';
import { TreeView } from '../tree-nav/TreeNav';
import { ItemList } from '../item-list/ItemList';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { SearchModel, SubcategoryArticles, Article as ArticleModel } from '../../models/search/Search';
import "./style.css";
import ArrowLeft from './arrow-left.png';
import { GetArticlesBySubcategory, GetArticleInfo, GetArticlesByCategory } from '../backend-api/api';
import { Article } from '../article/Article';
const { Content, Sider } = Layout;

const { Text } = Typography;

interface TreeContentProps {
    treeData: any[];
    items: SearchModel[];
    loading: boolean;
    searchText: string;
    article: ArticleModel | undefined;
    articleFound: boolean;
}

export const TreeContent = (props: TreeContentProps) => {
    const [loading, SetLoading] = useState(false);


    const [selectedNavItem, setSelectedNavItem] = useState<string>('');

    const [navItemClicked, setNavItemClicked] = useState<boolean>(false);

    const [navMenuClicked, setNavMenuClicked] = useState<boolean>(false);

    const [subcategoryArticles, setSubcategoryArticles] = useState<ArticleModel[]>([]);

    const [articleFound, setArticleFound] = useState<boolean>(false);


    const [articleLoading, setArticleLoading] = useState<boolean>(false);

    const [articleId, setArticleId] = useState<number>(1);

    const [articleInfo, setArticleInfo] = useState<ArticleModel>();

    const [articlePath, setArticlePath] = useState<string>("");


    const [searchText, setSearchText] = useState('');

    const [articleClicked, setArticleClicked] = useState(false);

    const onSelect = (selectedKeys: any, info: any) => {
        let index = selectedKeys.toString().lastIndexOf("/") + 1
        let navItem = selectedKeys.toString().slice(index, selectedKeys.toString().length);
        setSelectedNavItem(navItem)
        setNavItemClicked(true);
        setArticleClicked(false);
        articlesBySubcategory(navItem);
        setArticleFound(false);
        // если длина равна 3, то была выбрана категория
        // если длина равна 4, то была выбрана подкатегория
        let navDeep = info.node.pos.split('-').length
        if (navDeep === 3) {
            articlesByCategory(navItem)
        } else if (navDeep === 4) {
            articlesBySubcategory(navItem)
        }

    };

    const onArticleClick = (article_id: number) => {
        console.log("article click", article_id);
        subcategoryArticles.map(s => {
            if (s.id == article_id) {
                setArticleId(s.id)
                setArticlePath(s.path)
            }
        })
        setArticleClicked(true);
        setNavItemClicked(false);
    }

    useEffect(() => {
        // setItems(props.items);
        if (props.articleFound) {
            setArticleFound(true)
        } else {
            setArticleFound(false);
        }
        setArticleLoading(true);
    }, [props.articleFound])


    const articlesBySubcategory = async (subcategory_title: string) => {
        let response = await GetArticlesBySubcategory("", subcategory_title);
        if (!response.status) {
            setSubcategoryArticles([])
        } else {
            setSubcategoryArticles(response.result.articles)
        }
        setArticleLoading(false);
    }

    const articlesByCategory = async (category_title: string) => {
        console.log("category title", category_title)
        let response = await GetArticlesByCategory("", category_title)
        if (!response.status) {
            setSubcategoryArticles([])
        } else {
            setSubcategoryArticles(response.result.articles)
        }
        setArticleLoading(false);
    }


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
                        {props.loading ? 'loading' : (
                            <TreeView loading={props.loading} onSelect={onSelect} treeData={props.treeData} token="" items={props.treeData} />
                        )}
                    </div>
                </Sider>
                <Divider type="vertical" style={{ height: "100%", margin: "0 0px" }} />
                <Content style={{ padding: '0 24px', minHeight: 700, backgroundColor: 'white', borderTopRightRadius: '24px' }} >
                    {articleFound ? (
                        <Article article_id={props.article!.id} path={articlePath} />
                    ) : ''
                    }

                    {articleClicked ? (
                        <Article article_id={articleId} path={articlePath} />
                    ) : (
                            !articleFound ? (
                                <>
                                    <Typography>
                                        {(props.items.length === 0 && !navItemClicked) === true ? (
                                            props.searchText === "empty" && !navItemClicked ? '' : (
                                                <span className="title">
                                                    В Базе знаний нет статьи по запросу "{props.searchText}"
                                             </span>
                                            )
                                        ) : ''}

                                        <div className="nav-title">
                                            <span>
                                                {selectedNavItem}
                                            </span>
                                        </div>

                                        {(subcategoryArticles.length == 1) ? (
                                            <>
                                                <Text strong={true} style={{ backgroundColor: "rgb(249,250,250)", color: "black !important" }}>
                                                    найдена: 1 статья
                                            </Text>
                                            </>
                                        ) : (
                                                props.items.length == 0 ? (
                                                    <Text strong={true} style={{ backgroundColor: "rgb(249,250,250)", color: "black !important" }}>
                                                        найдено: 0 статей
                                             </Text>
                                                ) : (
                                                        <Text strong={true} style={{ backgroundColor: "rgb(249,250,250)", color: "black !important" }}>
                                                            найдено: {subcategoryArticles.length} статьи
                                                </Text>
                                                    )
                                            )}
                                    </Typography>
                                    <Divider type="horizontal" />

                                    <ItemList isLoading={articleLoading} items={subcategoryArticles} onClick={onArticleClick} navItemClicked={navItemClicked} />
                                </>
                            ) : ''
                         
                )}

                </Content>
        </Layout>
        </>
    )
}


