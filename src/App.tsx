import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Sidebar } from './components/sidebar/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        
        <div>
          <div className="wrapper">
            <Route path="/"  >
                <Sidebar />
              </Route>

          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
