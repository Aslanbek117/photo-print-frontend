import React from 'react'
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Product } from './product/Product';
import WrapperStatistic from 'antd/lib/statistic/Statistic';
import { Wrapper } from '../menu/Wrapper';
const { Header, Content, Footer, Sider } = Layout;

interface MenuState {
  title: string;
  state: number;
}


export class Sidebar extends React.Component<{}, MenuState> {


  constructor(props: any) {
    super(props);
    this.state = {
        title: "", 
        state: 0,
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
}


componentDidMount() {
  this.setState({
      title: "Товары",
      state: 1,
  });
}

handleMenuClick(event: any) {
  console.log(event)
  this.setState({
    title: event.key,
    state: parseInt(event.key, 10)
  })

  console.log(this.state);
}


  render() {
    return (
<Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}   onClick={this.handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Товары
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Приход
        </Menu.Item>
        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
          Расход
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} >
        
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24 }}>
          {/* <Product> 

          </Product> */}

          <Wrapper state={this.state.state} title={this.state.title}/>              
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Villa ©2021 </Footer>
    </Layout>
  </Layout>
    );
  }
}

