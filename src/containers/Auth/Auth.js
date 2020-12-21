import React, { Component } from "react";
import is from 'is_js'
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import Axios from "axios";

export default class Auth extends Component {

  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'E-mail',
        errorMessage: 'Please input correct e-mail',
        valid: false, // Состояние валидации контрола
        touched: false,
        validation: {
          required: true,
          email: true,
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Please input correct passord',
        valid: false, // Состояние валидации контрола
        touched: false,
        validation: {
          required: true,
          minLength: 6
      }
    }
  }
}

  loginHandler = async() => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    }

    try {
      const response = await Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCXTP9Vr2CyX_4S1rtHxcY5snOqSon7Ll4', authData)

      console.log(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  registerHandler = async() => {
    const authData = {
      email: this.state.formControls.email.value,
      password: this.state.formControls.password.value,
      returnSecureToken: true
    }

    try {
      const response = await Axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXTP9Vr2CyX_4S1rtHxcY5snOqSon7Ll4', authData)

      console.log(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  submitHandler = e => {
    e.preventDefault()
  }

  validateControl(value, validation) { // Валидация ввода
    if (!validation) { // Если нет параметров валидации, то валидация не нужна
      return true
    }

    let isValid = true;
    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = is.email(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid;
  }

  onChangeHandler = ({target}, controlName) => {

    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] } /** Независимая копия контрола (емаил или пасворд) для переопределения полей */

    control.value = target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation)  // Валидация ввода символов в локальной функции
  
    formControls[controlName] = control

    let isFormValid = true

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name] && isFormValid
    })

    this.setState({
      formControls, isFormValid
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, idx) => {
      const control = this.state.formControls[controlName];
      
      return (
        <Input
          key={controlName + idx}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={evt => this.onChangeHandler(evt, controlName)}
        />
      )
    })
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Auth</h1>
          <form
           className={classes.AuthForm}
           onSubmit={this.submitHandler}
           >
            {this.renderInputs()}

            <Button
             type="success"
             onClick={this.loginHandler}
             disabled={!this.state.isFormValid}
             >
             log in
             </Button>
            <Button
             type="primary"
             onClick={this.registerHandler}
             disabled={!this.state.isFormValid}
             >
             registrate
             </Button>
          </form>
        </div>
      </div>
    );
  }
}
