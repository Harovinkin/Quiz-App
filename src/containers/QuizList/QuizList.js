import React, { Component } from "react";
import classes from "./QuizList.module.css";
import { NavLink } from "react-router-dom";
import Axios from "axios";

export default class QuizList extends Component {
  state = {
    quizes: []
  }

  renderQuizList() {
    return this.state.quizes.map(quiz => (
      <li key={quiz.id}>
        <NavLink to={`/quiz/${quiz.id}`}>{quiz.name}</NavLink>
      </li>
    ));
  }

  async componentDidMount() {
    try {
      const response = await Axios.get('https://react-quiz-46e2a.firebaseio.com/quizes.json')
      
      const quizes = []
      
      Object.keys(response.data).forEach((key, idx) => {
        quizes.push({
          id: key,
          name: `Quiz №${idx + 1}`
        })
      })

      this.setState({
        quizes
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    
    return (
      <div className={classes.QuizList}>
        <h1>Quiz List</h1>
        <ul>{this.renderQuizList()}</ul>
      </div>
    );
  }
}
