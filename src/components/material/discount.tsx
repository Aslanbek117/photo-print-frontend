import * as React from "react";
import "./app.css";

interface CardProps {
  title: string;
  src: string;
  price: number;
}

export const Discount = (props?: any) => {
  return (
    <>
      <ul className="list-unstyled p-0 ribbon-holder mb-0">
        <li className="mb-1">
          <div className="ribbon sale ribbon-primary">SALE</div>
        </li>
        <li className="mb-1">
          <div className="ribbon new ribbon-info">NEW</div>
        </li>
      </ul>
    </>
  );
};
