import React from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import 'ant-design-pro/dist/ant-design-pro.css'; // Import whole style
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/header/Header';
// import './styles/index.scss';
import { MainPage } from './components/mainPage/MainPage';
import HeaderTemp from './components/header-temp/HeaderTemp';
import { TreeView } from './components/tree-nav/TreeNav';
import { ArticlePage } from './components/articlePage.tsx/ArticlePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/nav/:search" component={MainPage} />

        {/* <Route exact path="/nav/:search/:article" component={ArticlePage} /> */}
      </Switch>
    </Router>

  );
}

export default App;
