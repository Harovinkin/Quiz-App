import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component {
  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Auth</h1>
          <form className={classes.AuthForm}>
            <Input type="text" label="E-mail" errorMessage="TEST" />
            <Input type="text" label="Password" />

            <Button type="success">Войти</Button>
            <Button type="primary">Регистрация</Button>
          </form>
        </div>
      </div>
    );
  }
}
