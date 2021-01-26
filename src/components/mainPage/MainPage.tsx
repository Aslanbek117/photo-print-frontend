import React, { useState, useEffect } from 'react';

import { Form, Button } from 'antd';
import { Search, GetAllDirs } from '../backend-api/api';
import { SearchResponseDTO } from '../../models/search/Search';
import './main.css';
import { SearchTop } from '../search/Search';
import { Category } from '../category/Category';
import { Layout, Typography } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import { TreeContent } from '../tree-content/TreeContent';
import { DepartmentModal } from '../modals/DepartmentModal';
import { Article as ArticleModel } from '../../models/search/Search';
import Icon from '../icon';
import Text from '../text';

const { Header, Content } = Layout;
// const { Text } = Typography;

const mockVal = (str: string[], repeat: number = 1) => {
  return {
    value: str[0] || '',
  };
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const MainPage = (props: any) => {
  let history = useHistory();
  let location = useLocation();

  const [loading, setLoading] = useState(true);

  let [queryParam, setQueryParam] = useState<string>('');

  let query = useQuery();

  const [treeData, setTreeData] = useState<any[]>([]);

  const [form] = Form.useForm();

  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const [suggest, setSuggest] = useState<ArticleModel[]>([]);

  const [articleId, setArticleId] = useState<number>();

  const [article, setArticle] = useState<ArticleModel>();

  const [articleFound, setArticleFound] = useState<boolean>(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [searchText, setSearchText] = useState('');

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSearchClick = (searchInput: string) => {
    searchArticles(searchInput);
    setSearchText(searchInput);
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
    setQueryParam(query);
    console.log('query', query);
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
      setArticleFound(true);
      setLoading(false);
    }
  };

  return (
    <Layout className="layout">
      {!loading ? (
        <>
          <div className="header">
            <div className="main-container">
              <div className="logo">
                <a href="/">
                  <Icon icon="logo" width={108} height={38} />
                </a>
              </div>
              <Button
                type="primary"
                shape="round"
                size={'large'}
                style={{
                  float: 'right',
                  backgroundColor: 'rgb(237,237,239)',
                  color: 'black',
                  fontFamily: 'Roboto',
                  fontSize: '14px;',
                  lineHeight: '18px;',
                  border: 'none',
                }}
                onClick={() => setIsModalVisible(true)}
              >
                <Text type="subtitle2">Филиалы</Text>
              </Button>
            </div>
          </div>

          <Content style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="main-container">
              <div className="site-layout-content">
                {location.pathname === '/' ? (
                  <>
                    <Text type="title">Добро пожаловать в "Базу знаний"</Text>
                    <SearchTop onClick={(title) => onSearchClick(title)} />
                    <div style={{ paddingTop: '50px' }}></div>
                    <Text type="subtitle1">Поиск по категориям</Text>

                    <Category />
                  </>
                ) : (
                  <>
                    <TreeContent
                      article={article}
                      loading={loading}
                      items={suggest}
                      treeData={treeData}
                      searchText={searchText}
                    />
                  </>
                )}
              </div>
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
        </>
      ) : (
        'loading'
      )}
    </Layout>
  );
};
