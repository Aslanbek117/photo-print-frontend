import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { UserObject, Credentials } from '../../entities/User';
import { login } from '../../actions/get';

export  class Login extends Component<RouteComponentProps, Credentials> {

  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    }
  }


  async handleFormSubmit(e: any) {
    e.preventDefault();
    const payload = {
      "user": {
        "username": this.state.email,
        "password": this.state.password
      }
    }
    const user = await login(payload);

    if (user == null) {
      // this.setState({ error: "логин или пароль не совпадают. Попробуйте еще раз" })
    //   openNotification("bottomRight", 'Логин или пароль не совпадают. Попробуйте еще раз.', true)
    } else {
      const userStorage: UserObject = user;
      localStorage.setItem("user", JSON.stringify(user))

      this.props.history.push("/");
    }
  }

  handleEmailChange(event: any) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event: any) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (

      <form>
        <h3>Авторизация</h3>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => this.handleEmailChange(event)} />
        </div>

        <div className="form-group">
          <label>Пароль</label>
          <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={(event) => this.handlePasswordChange(event)} />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Запомнить меня</label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block" onClick={(event) => this.handleFormSubmit(event)}>Вход</button>
        <p className="forgot-password text-right">
          Забыли <a href="#">пароль?</a>
        </p>
      </form>
    )
  }
}



