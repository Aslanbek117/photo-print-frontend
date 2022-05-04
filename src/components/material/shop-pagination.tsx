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
  let next = (parseInt(props.page) + 1)
  let prevDisabled = "";
  let nextDisabled = ""
  if (next > props.pages.length) {
    nextDisabled = "disabled";
  }
  if (parseInt(props.page, 10) == 1 ) {
    prevDisabled = "disabled";
  }
  return (
  
    <>
      <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className={"page-item " + prevDisabled }key={110000} > 
                        <a className="page-link" href={"/catalog/" +props.category + "/" + "?page=" +  (parseInt(props.page) - 1)} aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      {props.pages.map(p => (
                          
                          <>
                          {p.toString() === props.page ? (
                            <li className="page-item active" key={p}>
                                <a className="page-link" href={"/catalog/" + props.category + "/"  + "?page=" + p}>
                            {p}
                          </a>    
                            </li>
                          ) : (
                            <li className="page-item" key={p}>
                                <a className="page-link" href={"/catalog/" + props.category + "/"  + "?page=" + p}>
                            {p}
                            </a>    
                            </li>
                          )}
                          </>

                        
                      ))}
                      <li className={"page-item " + nextDisabled }key={100000}>
                        <a className="page-link" href={host + "?page=" +  (parseInt(props.page) + 1) +"&per_page=15" + "&category=" + props.category} aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
    </>
  );
};
