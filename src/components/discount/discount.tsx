import * as React from "react";
import "../../styles/app.css";
export const Discount = () => {
  return (
    <>
      <ul className="list-unstyled p-0 ribbon-holder mb-0">
        <li className="mb-1" key={1}>
          <div className="ribbon sale ribbon-primary">SALE</div>
        </li>
        <li className="mb-1" key={2}>
          <div className="ribbon new ribbon-info">NEW</div>
        </li>
      </ul>
    </>
  );
};
