import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Layout, Menu, Breadcrumb } from 'antd';
import { CarouselComponent } from 'components/material/carousel';
import { CardComponent } from 'components/material/cards';
import { BrowserRouter } from 'react-router-dom';

import "antd/dist/antd.css";
import "./app.css";
import { SearchHeader } from 'components/search-header/SearchHeader';
import Sider from 'antd/lib/layout/Sider';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import App from 'components/material/main';
import { Route } from 'react-router';
import CardList from 'components/material/card-list';
import { Shop }  from 'components/material/shop';
const { Header, Content, Footer } = Layout;


const { SubMenu } = Menu;

export default function Index() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Shop}/>
      <Route path="/shop" componen={Shop} /> 
      <Route  path='/categories' component={CardList}/>
  </BrowserRouter>
  );
}