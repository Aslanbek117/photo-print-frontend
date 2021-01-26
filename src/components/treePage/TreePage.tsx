import React, { useState, useEffect } from 'react';

import { Form,  Button } from 'antd';
import { Search, GetAllDirs } from '../backend-api/api';
import { SearchResponseDTO } from '../../models/search/Search';
import './main.css';
import { SearchTop } from '../search/Search';
import { Category } from '../category/Category';
import HalykLogo from './halyk-logo.png';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import { TreeContent } from '../tree-content/TreeContent';
import { DepartmentModal } from '../modals/DepartmentModal';
import { Article as ArticleModel } from '../../models/search/Search';
const queryString = require('query-string');

const { Header, Content, Footer } = Layout;
const { Text, Link } = Typography;

const mockVal = (str: string[], repeat: number = 1) => {
  return {
    value: str[0] || '',
  };
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const TreePage = (props: any) => {
  let location = useLocation();

  const [loading, setLoading] = useState(true);

  const [treeData, setTreeData] = useState<any[]>([]);



  const [suggest, setSuggest] = useState<ArticleModel[]>([]);


  const [article, setArticle] = useState<ArticleModel>();


  const [isModalVisible, setIsModalVisible] = useState(false);

  const [searchText, setSearchText] = useState('');

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  async function fetch() {
    const response = await GetAllDirs(props.token, '../');
    setTreeData(response.result);
    console.log('FETCH FEtch ');
    setLoading(false);
  }

  useEffect(() => {
    fetch();
    let query = location.pathname.slice(
      location.pathname.lastIndexOf('=') + 1,
      location.pathname.length
    );
    setSearchText(query);
    // if (location.pathname='/')
    if (location.pathname != '/' && query != 'empty') {
      console.log('search');
      searchArticles(query);
    } else {
      setLoading(false);
    }
  }, []);

  const searchArticles = async (searchValue: string) => {
    const resp: SearchResponseDTO = await Search('', searchValue);

    if (resp.result === null) {
      setSuggest([]);
    } else {
      setSuggest(resp.result);
      setLoading(false);
    }
  };

  return (
    <>
      {!loading ? (
        <Layout
          className="layout"
          style={{ backgroundColor: 'rgb(243,246,248)' }}
        >
          <Header
            style={{ background: '#fff', paddingLeft: 160, paddingRight: 160 }}
          >
            <div className="logo">
              <a href="/">
                <img alt="halyk-wiki" src={HalykLogo} />
              </a>
            </div>
            <Button
              type="primary"
              shape="round"
              size={'large'}
              style={{
                float: 'right',
                marginTop: '13px',
                backgroundColor: 'rgb(237,237,239)',
                color: 'black',
                fontFamily: 'Roboto',
                fontSize: '14px;',
                lineHeight: '18px;',
                border: 'none',
              }}
              onClick={() => setIsModalVisible(true)}
            >
              <Text strong>Филиалы</Text>
            </Button>
          </Header>
          <Content
            style={{ padding: '0 50px', paddingLeft: 160, paddingRight: 160 }}
          >
            <div className="site-layout-content">
             
                  <TreeContent
                    article={article}
                    loading={loading}
                    items={suggest}
                    treeData={treeData}
                    searchText={searchText}
                  />
            </div>
          </Content>
          {isModalVisible && (
            <DepartmentModal
              title={'Филиалы'}
              isVisible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            />
          )}
        </Layout>
      ) : (
        'loading'
      )}
    </>
  );
};
