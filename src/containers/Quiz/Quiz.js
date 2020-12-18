import React, { Component } from "react";
import classes from "./Quiz.module.css";
import QuizWrapper from "../../components/QuizWrapper/QuizWrapper";
import QuizTitle from "../../components/QuizTitle/QuizTitle";
import ActiveQuiz from "../../components/QuizWrapper/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import ResultsList from "../../components/FinishedQuiz/ResultsList/ResultsList";
import Button from "../../components/UI/Button/Button";
import { Link } from "react-router-dom";
import Axios from "../../axios/axios-quiz";
import Loader from '../../components/UI/Loader/Loader'

class Quiz extends Component {
  state = {
    isQuizFinished: false,
    results: {},
    answerState: null,
    activeQuestion: 0,
    quiz: [],
    loading: true,
  };

  onAnswerClickHandler = (answerId) => {
    let { activeQuestion, answerState, results } = this.state;
    const question = this.state.quiz[activeQuestion];
    const isAnswerRight = question.rightAnswer === answerId;

    if (answerState) {
      const key = Object.keys(answerState)[0];

      if (answerState[key] === "success") {
        return;
      }
    }

    if (isAnswerRight) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }

      this.setState({
        answerState: { [answerId]: "success" },
        results,
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState((state) => ({
            isQuizFinished: !state.isQuizFinished,
          }));
        }

        this.setState({
          activeQuestion: activeQuestion + 1,
          answerState: null,
        });

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";

      this.setState({
        answerState: { [answerId]: "error" },
        results,
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      isQuizFinished: false,
      results: {},
      answerState: null,
      activeQuestion: 0,
    });
  };

  async componentDidMount() {
    try {
      const response = await Axios.get(`/quizes/${this.props.match.params.id}.json`)
      const quiz = response.data

      this.setState({
        quiz,
        loading: false
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { quiz, activeQuestion, answerState, results } = this.state;

    return (
      <div className={classes.Quiz}>
        {
          this.state.loading
            ? <Loader />
            : this.state.isQuizFinished 
                ? <FinishedQuiz>
                    <QuizTitle>результаты теста</QuizTitle>
                    <ResultsList results={results} quiz={quiz} />
                      <Button onClick={this.retryHandler} type="primary">
                        Повторить опрос
                      </Button>
                    <Link to="/">
                      <Button type="success">
                        Список опросов
                      </Button>
                    </Link>
                  </FinishedQuiz>
                : <QuizWrapper>
                    <QuizTitle>
                      ответьте на все вопросы теста
                    </QuizTitle>
                      <ActiveQuiz
                        quizLength={quiz.length}
                        questionNumber={activeQuestion + 1}
                        quiz={quiz[activeQuestion]}
                        onAnswerClick={this.onAnswerClickHandler}
                        answerState={answerState}
                      />
                  </QuizWrapper>
        }
      </div>
    );
  }
}

export default Quiz;
