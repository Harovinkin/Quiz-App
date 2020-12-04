import React, { Component } from "react";
import classes from "./QuizList.module.css";
import { NavLink } from "react-router-dom";
// import Axios from "axios";

export default class QuizList extends Component {
  renderQuizList() {
    return [1, 2, 3].map((quiz, idx) => (
      <li key={idx}>
        <NavLink to={`/quiz/${quiz}`}>Test {quiz}</NavLink>
      </li>
    ));
  }

  // componentDidMount() {
  //   Axios.get('https://react-quiz-46e2a.firebaseio.com/')
  //   .then(response => {
  //     console.log(response)
  //   })
  // }
  

  render() {
    return (
      <div className={classes.QuizList}>
        <h1>Quiz List</h1>
        <ul>{this.renderQuizList()}</ul>
      </div>
    );
  }
}
