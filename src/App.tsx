import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css'; // Import whole style
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from './components/mainPage/MainPage';
import { TreePage } from './components/treePage/TreePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route
          exact path="/search"
          component={() => <TreePage key={window.location.pathname} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
