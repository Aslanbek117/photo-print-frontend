import * as React from "react";
import "../../styles//app.css";

 interface ShopPaginationProps {
     page: string;
     per_page: string;
     pages: number[];
     category: string;
 }

export const ShopPagination = (props: ShopPaginationProps) => {
  const host = window.location.protocol + "//" + window.location.host;
  console.log("host", host);
  return (
    <>
      <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item" key={110000} > 
                        <a className="page-link" href={host + "?page=" +  (parseInt(props.page) - 1) +"&per_page=15" + "&category=" + props.category} aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      {props.pages.map(p => (
                          
                          // <li className="page-item active" key={p}>
                          //   {p.toString() === props.page ? (
                          //   <a className="page-link" href={host + "?page=" + p +"&per_page=15" + "&category=" + props.category}>
                          //   {p}
                          // </a>    
                          //   ) : (
                          //     <a className="page-link" href={host + "?page=" + p +"&per_page=15" + "&category=" + props.category}>
                          //   {p}
                          // </a>
                          //   )}
                          <>
                          {p.toString() === props.page ? (
                            <li className="page-item active" key={p}>
                                <a className="page-link" href={host + "?page=" + p +"&per_page=15" + "&category=" + props.category}>
                            {p}
                          </a>    
                            </li>
                          ) : (
                            <li className="page-item" key={p}>
                                <a className="page-link" href={host + "?page=" + p +"&per_page=15" + "&category=" + props.category}>
                            {p}
                            </a>    
                            </li>
                          )}
                          </>

                        
                      ))}
                      <li className="page-item" key={100000}>
                        <a className="page-link" href={host + "?page=" +  (parseInt(props.page) + 1) +"&per_page=15" + "&category=" + props.category} aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
    </>
  );
};
