import * as React from "react";
import "../../styles/app.css";
import { Discount } from "../discount/discount";

interface CardProps {
  title: string;
  src: string;
  price: number;
  onClick?: () => void;
  isDiscountEnable: boolean;
}

export const Card = (props: CardProps) => {

 
  return (
    <>
      <div className="product h-100">
        <div className="product-image">
          <a href="shop-detail.html">
            <img
              className="img-fluid"
              src={props.src}
              alt={props.title}
            />
          </a>
           {/* <img
              className="img-fluid"
              src={props.src}
              alt={props.title}
              style={{ maxWidth: "95%" }}
              /> */}
        </div>
        <div className="py-2 px-2 text-center">
          <h3 className="h5 text-uppercase mb-1" style={{wordWrap: 'break-word'}}>
              {props.title}
          </h3>
          {/* <p className="mb-0">12 000</p> */}
        </div>
        <ul className="list-unstyled p-0 ribbon-holder mb-0"></ul>
        {props.isDiscountEnable ? <Discount /> : null}

      </div>
    </>
  );
};
