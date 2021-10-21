import * as React from "react";
import "./app.css";

interface CardProps {
  title: string;
  src: string;
  price: number;
}

export const Col = (props: CardProps) => {
  return (
    <>
      <div className="col-lg-4 col-md-6" />

      
    </>
  );
};
