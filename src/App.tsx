import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/sidebar/Sidebar';
import "antd/dist/antd.css";
import 'ant-design-pro/dist/ant-design-pro.css'; // Import whole style
import { Login } from './components/login/Login';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>

        <div>
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={Sidebar} />

              <div className="auth-wrapper">
                <div className="auth-inner">
                  <Route exact path="/login" component={Login} />
                </div>
              </div>
            </Switch>
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
