import React, { useState, useEffect } from 'react';
import { Search, GetAllDirs } from '../backend-api/api';
import { SearchResponseDTO } from '../../models/search/Search';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import Loader from '../loader';
import { TreeContent } from '../tree-content/TreeContent';
import { Article as ArticleModel } from '../../models/search/Search';
import { Header } from '../header-maha/Header';
import './main.css';

const { Content } = Layout;

export const TreePage = (props: any) => {
  let location = useLocation();

  const [loading, setLoading] = useState(true);

  const [treeData, setTreeData] = useState<any[]>([]);

  const [suggest, setSuggest] = useState<ArticleModel[]>([]);

  const [searchText, setSearchText] = useState('');

  const [categoryToExpand, setCategoryToExpand] = useState<string[]>([]);

  useEffect(() => {
    async function fetch() {
      const response = await GetAllDirs(props.token, '../');
      setTreeData(response.result);
      setLoading(false);
    }

    const { state } = location;
    const { searchValue, categoryToExpand } = state;

    fetch();
    setCategoryToExpand(categoryToExpand);
    setSearchText(searchValue);
    // if (location.pathname='/')
    if (searchValue !== '') {
      searchArticles(searchValue);
    } else {
      setLoading(false);
    }
  }, [location.pathname, props.token]);

  const searchArticles = async (searchValue: string) => {
    const resp: SearchResponseDTO = await Search('', searchValue);

    if (resp.result === null) {
      setSuggest([]);
    } else {
      let key = 'title';
      const unique = [...new Map(resp.result.map(item => [item[key], item])).values()];
      setSuggest(unique);
      setLoading(false);
    }
  };

  return (
    <Layout className="layout">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Content style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="main-container">
              <div className="site-layout-content">
                <TreeContent
                  loading={loading}
                  items={suggest}
                  treeData={treeData}
                  searchText={searchText}
                  categoryToExpand={categoryToExpand}
                />
              </div>
            </div>
          </Content>
        </>
      )}
    </Layout>
  );
};
