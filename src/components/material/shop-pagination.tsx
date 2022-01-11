import * as React from "react";
import "../../styles//app.css";

 interface ShopPaginationProps {
     page: string;
     per_page: string;
     pages: number[];
     category: string;
 }

export const ShopPagination = (props: ShopPaginationProps) => {
  return (
    <>
      <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item" key={110000} > 
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      {props.pages.map(p => (
                          <li className="page-item" key={p}>
                          <a className="page-link" href={"http://localhost:3000?page=" + p +"&per_page=50" + "&category=" + props.category}>
                            {p}
                          </a>
                        </li>
                      ))}
                      <li className="page-item" key={100000}>
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
    </>
  );
};
