import * as React from "react";
import "./app.css";


export const Nav = () => {
   return  <nav aria-label="breadcrumb">
    <ol className="breadcrumb"  style={{backgroundColor: 'white'}}>
      <li className="breadcrumb-item">
        <a href="#" style={{color: '#d7701e'}}>Главная</a>
      </li>
      <li className="breadcrumb-item">
      <a href="#" style={{color: '#d7701e'}}> Модульные картины</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Data
      </li>
    </ol>
  </nav>
}