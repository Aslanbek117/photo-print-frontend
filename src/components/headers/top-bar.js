import * as React from "react";
import "../../styles//app.css";


export default function TopBar() {

  const [showLogin, setShowLogin] = React.useState(false)

  const [isAuthorized, setIsAuthorized] = React.useState(false);


  const logout = () => {
    localStorage.removeItem("user");
    window.location.href="/"
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
              <a className="text-lg" href="/"> 
                <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/site-image-2.png"} style={{maxWidth: 250}} alt="logo"></img>
              </a> 
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end justify-content-between">
                <ul className="list-inline d-block d-md-none mb-0">
                  <li className="list-inline-item" key={123132}>
                    <a className="text-xs" href="/">
                      <img src={"https://photo-print.fra1.digitaloceanspaces.com/static/site-image-2.png"} alt="logo" style={{maxWidth: 125}}/>
                    </a>
                  </li>
                </ul>
                <ul className="list-inline mb-0 ms-lg-4 d-flex">
                  {isAuthorized ? (
                    <>
                    <li className="list-inline-item" key={23133312}>
                    <a
                      className="text-xs text-uppercase fw-bold text-reset"
                      role="button"
                      onClick={() => logout()}
                    >
                      <span
                        className="d-md-inline-block"
                        style={{ color: "black" }}
                      >
                        <i class="fas fa-user me-2">
                      
                      </i>
                        Выйти
                      </span>
                      
                      
                    </a>
                  </li>
                    </>
                  ) : (
                    <>
                  <li className="list-inline-item" key={23111312}>
                    <a
                      className="text-xs text-uppercase fw-bold text-reset"
                      onClick={() => setShowLogin(!showLogin)}
                      role="button"
                      href="/login"
                    >
                       <span
                        className="d-md-inline-block"
                        style={{ color: "black" }}
                      >
                      <i className="fas fa-user me-2" style={{color: 'rgb(79, 191, 168)'}}/>
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
                      href="https://www.instagram.com/print_shop.kz/"
                      title="Instargam"
                      target="_blank"
                    >
                      <i className="fab fa-instagram fa-2x"></i>
                    </a>
                  </li>
                  <li className="list-inline-item text-gray-600" key={535423}>
                    <a
                      className="text-xs social-link-hover"
                      href="https://wa.me/77473865301"
                      title="Whatsapp"
                      target="_blank"
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
    </>
  );
}
