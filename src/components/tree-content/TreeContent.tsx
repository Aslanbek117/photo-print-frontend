import React, { useState, useEffect } from 'react';

import { Layout, Divider } from 'antd';
import { TreeView } from '../tree-nav/TreeNav';
import { ItemList } from '../item-list/ItemList';
import { SearchResult } from '../search-result/SearchResult';
import { Article as ArticleModel } from '../../models/search/Search';
import './style.css';
import {
  GetArticlesBySubcategory,
  GetArticlesByCategory,
  GetArticlesByEntity,
} from '../backend-api/api';
import Loader from '../loader';
import { Article } from '../article/Article';
import { BackToMainPage } from '../back-to-main/BackToMainPage';
import { PropertySafetyOutlined } from '@ant-design/icons';
const { Content, Sider } = Layout;

interface TreeContentProps {
  treeData: any[];
  items: ArticleModel[];
  loading: boolean;
  searchText: string;
  categoryToExpand: string[];
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

  const [categoryToExpand, setCategoryToExpand] = useState<string[]>(props?.categoryToExpand);

  const onSelect = (selectedKeys: any, info: any) => {
    let index = selectedKeys.toString().lastIndexOf('/') + 1;
    let navItem = selectedKeys.toString().slice(index, selectedKeys.toString().length);
    setSelectedNavItem(navItem);
    setNavItemClicked(true);
    setArticleClicked(false);

    // setCategoryToExpand([...categoryToExpand, ...selectedKeys]);
    articlesBySubcategory(navItem);
    // если длина равна 2, то была выбрана сущность
    // если длина равна 3, то была выбрана категория
    // если длина равна 4, то была выбрана подкатегория
    let navDeep = info.node.pos.split('-').length;
    if (navDeep === 2) {
      articlesByEntity(navItem);
    } else if (navDeep === 3) {
      articlesByCategory(navItem);
    } else if (navDeep === 4) {
      articlesBySubcategory(navItem);
    }
  };

  const onArticleClick = (article_id: number, category_to_expand: string[]) => {
    articles.map(s => {
      if (s.article_id === undefined) {
        if (s.id === article_id) {
          setArticleId(s.id);
          setArticlePath(s.path);
        }
      } else if (s.id === undefined) {
        if (s.article_id === article_id) {
          setArticleId(s.article_id);
          setArticlePath(s.path);
        }
      }
    });
    setArticleClicked(true);
    setNavItemClicked(false);
    setCategoryToExpand([selectedNavItem, ...category_to_expand]);
  };

  useEffect(() => {
    setArticles(props.items);
    setArticleLoading(false);
    setArticleClicked(false);
  }, [props.items, setArticles, props.searchText]);

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
    <Layout style={{ height: 'fit-content', backgroundColor: 'transparent' }}>
      <Sider
        theme="light"
        width={300}
        style={{
          borderTopLeftRadius: '24px',
          borderBottomLeftRadius: '24px',
          paddingTop: '20px',
        }}
      >
        <BackToMainPage />
        <div className="tree-view-container">
          {props.loading ? (
            <Loader />
          ) : (
            <TreeView
              loading={props.loading}
              onSelect={onSelect}
              treeData={props.treeData}
              token=""
              items={props.treeData}
              categoryToExpand={categoryToExpand}
            />
          )}
        </div>
      </Sider>
      <Divider type="vertical" style={{ height: '100%', margin: '0 0px' }} />
      <Content
        style={{
          padding: '24px',
          backgroundColor: '#ffffff',
          borderTopRightRadius: '24px',
          borderBottomRightRadius: '24px',
        }}
      >
        {articleClicked ? (
          <Article article_id={articleId} path={articlePath} />
        ) : (
          <>
            <SearchResult
              itemsCount={articles?.length}
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
  );
};
