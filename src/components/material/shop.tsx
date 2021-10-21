import * as React from "react";
import TopBar from "./top-bar.js";
import Header from "./header.js";
import "./app.css";
import SiteTitle from "./site-title.js";
import { Card } from "./card";
import { Discount } from "./discount";
import { Categories } from "./categories";
import { Footer } from "./footer";
import { PhotoPprint } from "../../models/search/Search";
import { useState, useEffect } from "react";
import { GetPhotoPrints } from "components/backend-api/api";
import Loader from "components/loader";

export const Shop = () => {
  const [data, setData] = useState<PhotoPprint[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const response = await GetPhotoPrints("some_token");
      setData(response.result.merchants);
      setLoading(false);
    }

    fetch();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="wide" id="all">
          <TopBar />
          {/* <div className="modal fade" id="login-modal" tabindex="-1" aria-labelledby="login-modalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-uppercase" id="login-modalLabel">Customer Login</h4>
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form action="customer-orders.html" method="get">
                <div className="form-group mb-3">
                  <input className="form-control" id="email_modal" type="text" placeholder="email"/>
                </div>
                <div className="form-group mb-3">
                  <input className="form-control" id="password_modal" type="password" placeholder="password" />
                </div>
                <p className="text-center">
                  <button className="btn btn-outline-primary"><i className="fas fa-door-open"></i> Log in</button>
                </p>
              </form>
              <p className="text-center text-muted small">Not registered yet?</p>
              <p className="text-center text-muted small"><a href="customer-register.html"><strong>Register now</strong></a>! It is easy and done in 1 minute and gives you access to special discounts and much more!</p>
            </div>
          </div>
        </div>
      </div> */}
          <Header />
          {/* <SiteTitle /> */}
          <section className="py-5">
            <div className="container py-4">
              <div className="row g-5">
              <Categories />
              {/* <Categories /> */}
                <div className="col-lg-9">
                  <h3 className="h4 text-uppercase mb-4 text-center">
                  Модульные картины
                  </h3>
                  {/* <h3 className="text-center mb-5">
                  Модульные картины

                  </h3> */}
                  <div className="row gy-5 align-items-stretch">
                    {data.map((d) => (
                      <div className="col-lg-4 col-md-4 col-xs-6 col-6">
                        <Card
                          title={d.title}
                          src={d.full_img_path}
                          price={143}
                        />
                      </div>
                    ))}

                 

                        

                    {/* PAGINATION */}
                  </div>
                  <a className="d-block text-center py-4">
                    <img
                      className="img-fluid"
                      src="img/banner2.jpg"
                      alt="banner"
                    />
                  </a>
                  <div className="text-center mb-5">
                    <a className="btn btn-outline-primary" href="#">
                      <i className="fas fa-angle-down me-2"></i>Load more
                    </a>
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  
                </div>
                
              </div>
            </div>
          </section>

          <Footer />
        </div>
      )}
    </>
  );
};
