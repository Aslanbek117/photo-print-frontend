import * as React from "react";
import logo from "../files/logo2.png";
import "../../styles//app.css";
import { Auth } from "../material/auth";
import { LoginComponent } from "components/login/login";

export default function TopBar() {

  const [showModal, setShowModal] = React.useState(false);

  const [showLogin, setShowLogin] = React.useState(false)

  const [isAuthorized, setIsAuthorized] = React.useState(false);


  const onClose = () => {
    setShowModal(false);
  }

  const onLoginClose = () => {
    setShowLogin(false);
  }



  React.useEffect(() => {
    if (localStorage.getItem("user") != null ) {
      setIsAuthorized(true)
    }
  }, []);

  return (
    <>
      <div className="top-bar" id="topBar" style={{ backgroundColor: "#f1f1f1" }}>
        <div className="container px-lg-0 text-light py-1">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 d-md-block d-none">
              <a className="text-xs" href="/">
                <img src={logo} alt="logo"></img>
              </a>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end justify-content-between">
                <ul className="list-inline d-block d-md-none mb-0">
                  <li className="list-inline-item" key={123132}>
                    <a className="text-xs" href="/">
                      <img src={logo} alt="logo"/>
                    </a>
                  </li>
                </ul>
                <ul className="list-inline mb-0">
                  {isAuthorized ? null : (
                    <>
                    <li className="list-inline-item" key={13123132}>
                    <a
                      className="text-xs text-uppercase fw-bold text-reset"
                      // href="#"
                      role="button"
                      onClick={() => setShowModal(!showModal)}
                      // data-toggle="modalLoginForm"
                      // data-target="#modalLoginForm"
                    >
                      <i className="fas fa-door-open me-2"></i>
                      <span
                        className="d-none d-md-inline-block"
                        style={{ color: "black" }}
                      >
                        Регистрация
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item" key={231312}>
                    <a
                      className="text-xs text-uppercase fw-bold text-reset"
                      onClick={() => setShowLogin(!showLogin)}
                      role="button"

                    >
                      <i className="fas fa-user me-2"></i>
                      <span
                        className="d-none d-md-inline-block"
                        style={{ color: "black" }}
                      >
                        Вход
                      </span>
                    </a>
                  </li>
                    </>
                  
                  )}
                  
                  
                </ul>
                <ul className="list-inline mb-0 ms-lg-4 d-flex justify-content-center">
                  <li className="list-inline-item text-gray-600" key={132243}>
                    <a
                      className="text-xs social-link-hover"
                      href="#"
                      title="Instargam"
                    >
                      <i className="fab fa-instagram fa-2x"></i>
                    </a>
                  </li>
                  <li className="list-inline-item text-gray-600" key={535423}>
                    <a
                      className="text-xs social-link-hover"
                      href="#"
                      title="Whatsapp"
                    >
                      <i className="fab fa-whatsapp fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Auth showModal={showModal} onClose={onClose} />

      <LoginComponent showModal={showLogin} onClose={onLoginClose} />
    </>
  );
}
