import { Login } from "components/backend-api/api";
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

  async function RegisterUser() {
    const user: UserPost = {
      email: email, 
      password: password
    }
    const response = await Login("", user)

    if (response.status === true && response.message ==="ok") {
        localStorage.setItem("user", JSON.stringify(response.result))
    } else  {
      errorMessage("Ошибка", response.message)
    }

  }
  return (
    <>
       <div className="modal fade show" id="login-modal" tab-index="-1" aria-labelledby="login-modalLabel" role="dialog" style={{display: props.showModal ? 'block' : 'none'}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title text-uppercase" id="login-modalLabel">Вход</h4>
              <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" onClick={(e) => {
                props.onClose()
              }} ></button>
            </div>
            <div className="modal-body">
              {/* <form> */}
                <div className="form-group mb-3">
                  <input className="form-control" id="email_modal" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mb-3">
                  <input className="form-control" id="password_modal" type="password" placeholder="пароль"  value={password} onChange={(e) => setPassword(e.target.value)}  />
                </div>
                <p className="text-center">
                  <button className="btn btn-outline-primary" onClick={() => RegisterUser()}><i className="fas fa-door-open"></i>Войти</button>
                </p>
              {/* </form> */}
              <p className="text-center text-muted small">Еще не зарегистрированы?</p>
              <p className="text-center text-muted small"><a href="customer-register.html"><strong>Зарегистрироваться</strong></a>! Это займет не более 5 секунд!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
