import React, { useState, useEffect } from 'react';

import { Form, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Search, GetAllDirs } from '../backend-api/api';
import { SearchResponseDTO, SearchModel } from '../../models/search/Search';
import './main.css';
import { SearchTop } from '../search/Search';
import { Category } from '../category/Category';
import Loader from '../loader';
import HalykLogo from './halyk-logo.png';
import { Layout, Typography } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import { TreeContent } from '../tree-content/TreeContent';
import { Article } from '../article/Article';

const { Header, Content } = Layout;
const { Text } = Typography;

const mockVal = (str: string[], repeat: number = 1) => {
  return {
    value: str[0] || '',
  };
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const ArticlePage = (props: any) => {
  let history = useHistory();
  let location = useLocation();

  const [loading, setLoading] = useState(true);

  let [queryParam, setQueryParam] = useState<string>('');

  let query = useQuery();

  const [treeData, setTreeData] = useState(props.treeData);

  const [form] = Form.useForm();

  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const [suggest, setSuggest] = useState<SearchModel[]>([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  const renderItem = (title: string, count: number) => {
    return {
      value: title,
      label: (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {title}
          <span>
            <UserOutlined /> {count}
          </span>
        </div>
      ),
    };
  };

  async function fetch() {
    const response = await GetAllDirs(props.token, '../');
    setTreeData(response.result);
  }

  useEffect(() => {
    console.log('query', location);
    fetch();
    let query = location.pathname.slice(
      location.pathname.lastIndexOf('/') + 1,
      location.pathname.length
    );
    setQueryParam(query);
    // if (location.pathname='/')
    if (location.pathname != '/') {
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
      // setSuggest(resp.result);
      setLoading(false);
    }
  };

  return (
    <>
      article page
      {loading ? (
        <Loader />
      ) : (
        <Layout className="layout" style={{ backgroundColor: 'rgb(243,246,248)' }}>
          <Header style={{ background: '#fff' }}>
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
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">{/* <Article /> */}</div>
          </Content>

          {/* <DepartmentModal title={"Филиалы"} isVisible={isModalVisible} onOk={handleOk} onCancel={handleCancel} /> */}
        </Layout>
      )}
    </>
  );
};
