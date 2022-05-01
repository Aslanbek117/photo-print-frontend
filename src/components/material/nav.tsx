import * as React from "react";
import "../../styles//app.css";

interface Props {
  toShow: boolean
  title?: string
  firstTitle?: string
  firstTitleHref?: string
}

export const Nav = (props: Props) => {
   return  <nav aria-label="breadcrumb">
    <ol className="breadcrumb"  style={{backgroundColor: 'white'}}>
      <li className="breadcrumb-item" key={665334}>
        <a href="/" style={{color: '#d7701e'}}>Главная</a>
      </li>
      <li className="breadcrumb-item"  key={11}>
<a href={props.firstTitleHref} style={{color: '#d7701e'}}> {props.firstTitle}</a>
      </li>
      {props.toShow ? (
        <li className="breadcrumb-item active"  key={4432329}>
        {props.title}
      </li>
      ) : null}
      
    </ol>
  </nav>
}

//