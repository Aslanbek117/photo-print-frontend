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

function App() {
  return (
    <Router>
      {/* <Header user={ {} as any} cityId={2} /> */}
      {/* <HeaderTemp user={ {} as any} cityId={2} /> */}
{/*  */}
      <MainPage />
        <div>
          <Switch>
          </Switch>
        </div>
    </Router>

  );
}

export default App;
