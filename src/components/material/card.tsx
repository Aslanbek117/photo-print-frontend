import * as React from "react";
import "./app.css";
import { Discount } from "./discount";

interface CardProps {
  title: string;
  src: string;
  price: number;
  onClick?: () => void;
}

export const Card = (props: CardProps) => {

 
  return (
    <>
      <div className="product h-100"
      onClick={() => console.log("XUI")}>
        <div className="product-image">
          {/* <a href="shop-detail.html">
            <img
              className="img-fluid"
              src={props.src}
              alt={props.title}
            />
          </a> */}
           <img
              className="img-fluid"
              src={props.src}
              alt={props.title}
            />
        </div>
        <div className="py-4 px-3 text-center">
          <h3 className="h5 text-uppercase mb-3">
            <a className="reset-link" href="shop-detail.html">
              {props.title}
            </a>
          </h3>
          <p className="mb-0">{props.price}</p>
        </div>
        <ul className="list-unstyled p-0 ribbon-holder mb-0"></ul>
        <Discount />

      </div>
    </>
  );
};
