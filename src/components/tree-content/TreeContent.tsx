import React, { useState, useEffect } from 'react';

import { Layout, Typography, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';
import { TreeView } from '../tree-nav/TreeNav';
import { ItemList } from '../item-list/ItemList';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { SearchResult } from '../search-result/SearchResult';
import {
  SearchModel,
  SubcategoryArticles,
  Article as ArticleModel,
} from '../../models/search/Search';
import './style.css';
import ArrowLeft from './arrow-left.png';
import {
  GetArticlesBySubcategory,
  GetArticleInfo,
  GetArticlesByCategory,
  GetArticlesByEntity,
} from '../backend-api/api';
import { Article } from '../article/Article';
const { Content, Sider } = Layout;

const { Text } = Typography;

interface TreeContentProps {
  treeData: any[];
  items: ArticleModel[];
  loading: boolean;
  searchText: string;
  article: ArticleModel | undefined;
}

export const TreeContent = (props: TreeContentProps) => {
  const [loading, SetLoading] = useState(false);

  const [selectedNavItem, setSelectedNavItem] = useState<string>('');

  const [navItemClicked, setNavItemClicked] = useState<boolean>(false);

  const [articles, setArticles] = useState<any[]>([]);

  const [articleLoading, setArticleLoading] = useState<boolean>(false);

  const [articleId, setArticleId] = useState<number>(1);

  const [articlePath, setArticlePath] = useState<string>('');

  const [articleClicked, setArticleClicked] = useState(false);

  const onSelect = (selectedKeys: any, info: any) => {
    let index = selectedKeys.toString().lastIndexOf('/') + 1;
    let navItem = selectedKeys.toString().slice(index, selectedKeys.toString().length);
    setSelectedNavItem(navItem);
    setNavItemClicked(true);
    setArticleClicked(false);
    articlesBySubcategory(navItem);
    console.log('clickedd', navItemClicked);
    // если длина равна 2, то была выбрана сущность
    // если длина равна 3, то была выбрана категория
    // если длина равна 4, то была выбрана подкатегория
    let navDeep = info.node.pos.split('-').length;
    console.log(navDeep);
    if (navDeep === 2) {
      articlesByEntity(navItem);
    } else if (navDeep === 3) {
      articlesByCategory(navItem);
    } else if (navDeep === 4) {
      articlesBySubcategory(navItem);
    }
  };

  const onArticleClick = (article_id: number) => {
    articles.map((s) => {
      if (s.article_id === undefined) {
        if (s.id == article_id) {
          setArticleId(s.id);
          setArticlePath(s.path);
        }
      } else if (s.id === undefined) {
        if (s.article_id == article_id) {
          setArticleId(s.article_id);
          setArticlePath(s.path);
        }
      }
    });
    setArticleClicked(true);
    setNavItemClicked(false);
  };

  useEffect(() => {
    setArticles(props.items);
    setArticles(props.items);
    setArticleLoading(false);
  }, []);

  const articlesBySubcategory = async (subcategory_title: string) => {
    let response = await GetArticlesBySubcategory('', subcategory_title);
    if (!response.status) {
      setArticles([]);
    } else {
      setArticles(response.result.articles);
    }
    setArticleLoading(false);
  };

  const articlesByCategory = async (category_title: string) => {
    let response = await GetArticlesByCategory('', category_title);
    if (!response.status) {
      setArticles([]);
    } else {
      setArticles(response.result.articles);
    }
    setArticleLoading(false);
  };

  const articlesByEntity = async (entity_title: string) => {
    let response = await GetArticlesByEntity('', entity_title);
    if (!response.status) {
      setArticles([]);
    } else {
      setArticles(response.result.articles);
    }
    setArticleLoading(false);
  };

  return (
    <>
      <Layout>
        <Sider
          theme="light"
          width={300}
          style={{ borderTopLeftRadius: '24px', paddingTop: '20px' }}
        >
          <span
            style={{
              fontFamily: 'Roboto',
              fontSize: '16px',
              lineHeight: '20px !important',
              letterSpacing: '-0.4px/',
            }}
          >
            <img src={ArrowLeft} style={{ paddingLeft: '5px', width: 18, height: 12 }} />
            <span style={{ paddingLeft: '5px' }}>
              <a href="/">Вернуться на главную</a>
            </span>
          </span>
          <div style={{ paddingTop: '15px' }}>
            {props.loading ? (
              'loading'
            ) : (
              <TreeView
                loading={props.loading}
                onSelect={onSelect}
                treeData={props.treeData}
                token=""
                items={props.treeData}
              />
            )}
          </div>
        </Sider>
        <Divider type="vertical" style={{ height: '100%', margin: '0 0px' }} />
        <Content
          style={{
            padding: '0 24px',
            minHeight: 700,
            backgroundColor: 'white',
            borderTopRightRadius: '24px',
          }}
        >
          {articleClicked ? (
            <Article article_id={articleId} path={articlePath} />
          ) : (
            <>
              <SearchResult
                itemsCount={articles.length}
                searchText={props.searchText}
                navItemClicked={navItemClicked}
                selectedNavItem={selectedNavItem}
                articles={articles}
              />

              <Divider type="horizontal" />

              <ItemList
                isLoading={articleLoading}
                items={articles}
                onClick={onArticleClick}
                navItemClicked={navItemClicked}
              />
            </>
          )}
        </Content>
      </Layout>
    </>
  );
};
