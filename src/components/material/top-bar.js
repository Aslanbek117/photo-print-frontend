import * as React from "react";
import logo from "./logo2.png";
import { Modal, Button } from "antd";
import "./app.css";

export default function TopBar() {
  return (
    <>
      <div class="top-bar" id="topBar" style={{ backgroundColor: "#f1f1f1" }}>
        <div class="container px-lg-0 text-light py-1">
          <div class="row d-flex align-items-center">
            <div class="col-md-6 d-md-block d-none">
              <a class="text-xs" href="/">
                <img src={logo}></img>
              </a>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-md-end justify-content-between">
                <ul class="list-inline d-block d-md-none mb-0">
                  <li class="list-inline-item">
                    <a class="text-xs" href="/">
                      <img src={logo} />
                    </a>
                  </li>
                </ul>
                {/* <ul class="list-inline mb-0">
                  <li class="list-inline-item">
                    <a
                      class="text-xs text-uppercase fw-bold text-reset"
                      href="#"
                      // data-toggle="modalLoginForm"
                      // data-target="#modalLoginForm"
                    >
                      <i class="fas fa-door-open me-2"></i>
                      <span
                        class="d-none d-md-inline-block"
                        style={{ color: "black" }}
                      >
                        Войти
                      </span>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      class="text-xs text-uppercase fw-bold text-reset"
                      href="customer-register.html"
                    >
                      <i class="fas fa-user me-2"></i>
                      <span
                        class="d-none d-md-inline-block"
                        style={{ color: "black" }}
                      >
                        Регистрация
                      </span>
                    </a>
                  </li>
                </ul> */}
                <ul class="list-inline mb-0 ms-lg-4 d-flex justify-content-center">
                  <li class="list-inline-item text-gray-600">
                    <a
                      class="text-xs social-link-hover"
                      href="#"
                      title="Instargam"
                    >
                      <i class="fab fa-instagram fa-2x"></i>
                    </a>
                  </li>
                  <li class="list-inline-item text-gray-600">
                    <a
                      class="text-xs social-link-hover"
                      href="#"
                      title="Whatsapp"
                    >
                      <i class="fab fa-whatsapp fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
