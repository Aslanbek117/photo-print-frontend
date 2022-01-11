import * as React from "react";
import "../../styles//app.css";

interface Props {
  id: number;
  text: string;
  href: string;
  setSelected: Function;
  isSelected: boolean
}

export const TabItem = (props: Props)  => {
    return (
      props.isSelected  ? (<li className="nav-item" key={props.id}>
      <a
        className="nav-link active"
        role="presentation"
        aria-current="page"
        style={{
          letterSpacing: "1.4px",
          fontFamily: `"Ubuntu Regular",Ubuntu,sans-serif"`,
                      fontWeight: 400,
          fontSize: "19px",
          textTransform: "uppercase",
          // textDecoration: 'underline #4fbfa8',
          // textUnderlinePosition: 'under',
          borderBottom: '3px solid #4fbfa8'
        }}
        data-bs-toggle="tab" data-bs-target="#home" type="button" aria-controls="home"
        onClick={() => (
          props.setSelected(props.id)
          )}
      >
        {props.text}
      </a>
    </li>) : (<li className="nav-item" key={props.id}>
        <a
          className="nav-link active"
          role="presentation"
          aria-current="page"
          style={{
            letterSpacing: "1.4px",
            fontFamily: `"Ubuntu Regular",Ubuntu,sans-serif"`,
                        fontWeight: 400,
            fontSize: "19px",
            textTransform: "uppercase"
          }}
          data-bs-toggle="tab" data-bs-target="#home" type="button" aria-controls="home"
          onClick={() => (
            props.setSelected(props.id)
            )}
        >
          {props.text}
        </a>
      </li>)
        
    )
    
  };



