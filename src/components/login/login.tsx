import { Login } from "components/backend-api/api";
import { SiteHeader } from "components/headers/header";
import TopBar from "components/headers/top-bar";
import Loader from "components/loader";
import { Nav } from "components/material/nav";
import { UserPost } from "models/search/Search";
import * as React from "react";
import { errorMessage } from "utils/Notifications";
import '../../styles/app.css'

interface Props {
    showModal: boolean
    onClose: Function
}

export  const LoginComponent = (props: Props)  => {

  const [email, setEmail] = React.useState("")

  const [password, setPassword] = React.useState("");

  const [loading, setLoading] = React.useState(true);

  async function LogiuUser() {
    const user: UserPost = {
      email: email, 
      password: password
    }
    const response = await Login("", user)

    if (response.status === true && response.message ==="ok") {
        localStorage.setItem("user", JSON.stringify(response.result))
        window.location.href="/account";
    } else  {
      errorMessage("Ошибка", response.message)
    }
  }

  React.useEffect(() => {
    setLoading(false);    
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="wide" id="all">
            <TopBar />
            <SiteHeader ordersCount={0} />
            <section className="py-3" style={{ backgroundColor: "white" }}>
              <div className="container">
                <Nav
                  toShow={false}
                  title={""}
                  firstTitleHref={"/"}
                  firstTitle="Вход"
                />
                <div className="row g-5">
                <div className="col-lg-6">
              <header className="mb-2">
                <h2 className="text-uppercase mb-2">Зайти в аккаунт</h2>
              </header>
                <div className="form-group mb-1">
                  <label className="form-label"></label>
                  <input className="form-control" id="useremail" type="text" name="useremail" placeholder="Введите имейл" value={email} onChange={(e) => setEmail(e.target.value) } />
                </div>
                <div className="form-group mb-1">
                  <label className="form-label" ></label>
                  <input className="form-control" id="userpassword" type="text" name="userpassword" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group mb-3 text-center">
                  <button className="btn btn-outline-primary" type="submit" onClick={() => LogiuUser()} ><i className="fas fa-user me-2"></i>Войти</button>
                  <a className="btn btn-outline-primary" href="/registration" type="button" onClick={() => LogiuUser()} style={{marginLeft: 10}}><i className="fas fa-user me-2"></i>Зарегистрироваться</a>
                </div>
                
            </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};












{/* <p className="text-center text-muted small">Еще не зарегистрированы?</p> */}
            //   <p className="text-center text-muted small"><a href="customer-register.html"><strong>Зарегистрироваться</strong></a>! Это займет не более 5 секунд!</p>
