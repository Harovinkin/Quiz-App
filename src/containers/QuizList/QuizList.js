import React, { Component } from "react";
import classes from "./QuizList.module.css";
import { NavLink } from "react-router-dom";
import Axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";

export default class QuizList extends Component {
  state = {
    quizes: [],
    isLoading: true
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
      const response = await Axios.get('/quizes.json')
      
      const quizes = []
      
      Object.keys(response.data).forEach((key, idx) => {
        quizes.push({
          id: key,
          name: `Quiz №${idx + 1}`
        })
      })

      this.setState({
        quizes,
        isLoading: false
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    
    return (
      <div className={classes.QuizList}>
        <h1>Quiz List</h1>
        {
          this.state.isLoading
          ? <Loader />
          : <ul>{this.renderQuizList()}</ul>
        }
      </div>
    );
  }
}
