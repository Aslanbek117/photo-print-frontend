import * as React from "react";
import "./app.css";

interface Props {
  toShow: boolean
  title?: string
  firstTitle?: string
  firstTitleHref?: string
}

export const Nav = (props: Props) => {
   return  <nav aria-label="breadcrumb">
    <ol className="breadcrumb"  style={{backgroundColor: 'white'}}>
      <li className="breadcrumb-item">
        <a href="/" style={{color: '#d7701e'}}>Главная</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
<a href={props.firstTitleHref} style={{color: '#d7701e'}}> {props.firstTitle}</a>
      </li>
      {props.toShow ? (
        <li className="breadcrumb-item active" aria-current="page">
        {props.title}
      </li>
      ) : null}
      
    </ol>
  </nav>
}