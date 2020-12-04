import React, { Component } from "react";
import classes from "./QuizCreator.module.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import {createControl} from '../../form/formFremework'
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

function createOptionControl(number) {
  return createControl({
    id: number,
    label: `Variant ${number}`,
    errorMessage: 'Value can not be empty',
  }, {
    required: true
  })
}

function createFormControls() {
  return {
    question: createControl({
      label: 'Input Question',
      errorMessage: 'Field can not be empty',
    }, {
      required: true
    }),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}

export default class QuizCreator extends Component {
  state = {
    quiz: [], /** Массив для добавления и хранения объектов с вопросами */
    formControls: createFormControls()
  }


  submitHandler = e => {
    e.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuestionHandler = () => {

  }

  onChangeHandler = (value, controlName) => {
    
  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, idx) => {
      const control = this.state.formControls[controlName];
      // console.log(control)
      return (
        <Auxiliary key={controlName + idx}>
          <Input
          label={control.label}
          value={control.value}
          valid={control.valid}
          shouldValidate={!!control.validation}
          touched={control.touched}
          errorMessage={control.errorMessage}
          onChange={e => this.onChangeHandler(e.target.value, controlName)}
        />
        {idx === 0 ? <hr /> : null}
        </Auxiliary>
      )
    })
  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Quiz Creator</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderControls()}
            <select></select>
            <Button
              type='primary'
              onClick={this.addQuestionHandler}
            >
              Add Question
            </Button>
            <Button
              type='success'
              onClick={this.createQuestionHandler}
            >
              Create Question
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
 