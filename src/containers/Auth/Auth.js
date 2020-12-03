import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component {

  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'E-mail',
        errorMessage: 'Input valid e-mail',
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
        errorMessage: 'Input valid passord',
        valid: false, // Состояние валидации контрола
        touched: false,
        validation: {
          required: true,
          minLength: 6
      }
    }
  }
}

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = e => {
    e.preventDefault()
  }

  onChangeHandler = ({target}, controlName) => {
    console.log(controlName, target.value)
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
             >
             log in
             </Button>
            <Button
             type="primary"
             onClick={this.registerHandler}
             >
             registrate
             </Button>
          </form>
        </div>
      </div>
    );
  }
}
