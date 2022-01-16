import * as React from "react";
import { Discount } from "../discount/discount";
import "../../styles/app.css";

interface CardProps {
  title: string;
  src: string;
  price: number;
  onClick?: () => void;
  isDiscountEnable: boolean;
}

export const CategoryCard = (props: CardProps) => {
  return (
    <>
      <div className="container-shop-card" >
        {/* <div className="product-image"> */}
          <img className="img-fluid" src={props.src} alt={props.title} />
        <div className="content-shop-card">
        <h4 className="text-uppercase text-center" style={{color: '#000', fontWeight: 300, fontSize: '18px', lineHeight: '5px', letterSpacing: '1.8px'}}>{props.title}</h4>
        </div>
        {/* <img
              className="img-fluid"
              src={props.src}
              alt={props.title}
              style={{ maxWidth: "95%" }}
              /> */}
        {/* </div> */}
      </div>
    </>
  );
};
