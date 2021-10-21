import * as React from "react";
import "./app.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-gray-700 text-white py-5">
          <div className="container py-4">
            <div className="row gy-4">
              <div className="col-lg-3">
                <h4 className="mb-3 text-uppercase">About Us</h4>
                <p className="text-sm text-gray-500">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas.
                </p>
                <hr />
                <h4 className="h6 text-uppercase">Join Our Monthly Newsletter</h4>
                <form>
                  <div className="input-group border mb-3">
                    <input
                      className="form-control bg-none border-0 shadow-0 text-white"
                      type="email"
                      placeholder="Email address"
                      aria-label="Email address"
                      aria-describedby="button-submit"
                    />
                    <button
                      className="btn btn-outline-light bg-none border-0"
                      id="button-submit"
                      type="button"
                    >
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-3">
                <h4 className="mb-3 text-uppercase">Blog</h4>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <a href="blog-post.html">
                      <img
                        className="img-fluid"
                        src="img/detailsquare.jpg"
                        alt="..."
                        width="40"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-uppercase mb-0">
                        {" "}
                        <a className="text-reset" href="blog-post.html">
                          Blog post name
                        </a>
                      </h6>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <a href="blog-post.html">
                      <img
                        className="img-fluid"
                        src="img/detailsquare.jpg"
                        alt="..."
                        width="40"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-uppercase mb-0">
                        {" "}
                        <a className="text-reset" href="blog-post.html">
                          Blog post name
                        </a>
                      </h6>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <a href="blog-post.html">
                      <img
                        className="img-fluid"
                        src="img/detailsquare.jpg"
                        alt="..."
                        width="40"
                      />
                    </a>
                    <div className="ms-2">
                      <h6 className="text-uppercase mb-0">
                        {" "}
                        <a className="text-reset" href="blog-post.html">
                          Very very long blog post name
                        </a>
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h4 className="mb-3 text-uppercase">Contact</h4>
              </div>
              <div className="col-lg-3">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mb-2 me-2 pb-1">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/detailsquare.jpg"
                        alt="..."
                        width="70"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item mb-2 me-2 pb-1">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/detailsquare2.jpg"
                        alt="..."
                        width="70"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item mb-2 me-2 pb-1">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/detailsquare3.jpg"
                        alt="..."
                        width="70"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item mb-2 me-2 pb-1">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/detailsquare3.jpg"
                        alt="..."
                        width="70"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item mb-2 me-2 pb-1">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/detailsquare2.jpg"
                        alt="..."
                        width="70"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item mb-2 me-2 pb-1">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="img/detailsquare.jpg"
                        alt="..."
                        width="70"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-dark py-5">
          <div className="container">
            <div className="row align-items-cenrer gy-3 text-center">
              <div className="col-md-6 text-md-start">
                <p className="mb-0 text-sm text-gray-500">
                  &copy; 2021. Your company / name goes here{" "}
                </p>
              </div>
              <div className="col-md-6 text text-md-end">
                <p className="mb-0 text-sm text-gray-500">
                  Template designed by{" "}
                  <a href="https://bootstrapious.com" target="_blank">
                    Bootstrapious
                  </a>{" "}
                  &amp;{" "}
                  <a href="https://hikershq.com/" target="_blank">
                    HHQ
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
