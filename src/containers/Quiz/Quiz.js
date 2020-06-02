import React, { Component } from "react";
import classes from "./Quiz.module.css";
import QuizWrapper from "../../components/QuizWrapper/QuizWrapper";
import QuizTitle from "../../components/QuizTitle/QuizTitle";
import ActiveQuiz from "../../components/QuizWrapper/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import ResultsList from "../../components/FinishedQuiz/ResultsList/ResultsList";
import Button from "../../components/UI/Button/Button";

class Quiz extends Component {
  state = {
    isQuizFinished: false,
    results: {},
    answerState: null,
    activeQuestion: 0,
    quiz: [
      {
        question: "Крыса это?",
        id: 1,
        rightAnswer: 1,
        answers: [
          { text: "Животное", id: 1 },
          { text: "Насекомое", id: 2 },
          { text: "Птица", id: 3 },
          { text: "Рыба", id: 4 },
        ],
      },
      {
        question: "Комар это?",
        id: 2,
        rightAnswer: 2,
        answers: [
          { text: "Млекопитающее", id: 1 },
          { text: "Кровососущее", id: 2 },
          { text: "Мясоед", id: 3 },
          { text: "Травоед", id: 4 },
        ],
      },
      // {
      //   question: 'Насекомое это?',
      //   id: 3,
      //   rightAnswer: 1,
      //   answers: [
      //     {text: 'Жуки', id: 1},
      //     {text: 'Пауки', id: 2},
      //     {text: 'Пресмыкающиеся', id: 3},
      //     {text: 'Растения', id: 4}
      //   ],
      // },
      // {
      //   question: 'Танк это?',
      //   id: 4,
      //   rightAnswer: 3,
      //   answers: [
      //     {text: 'Машина', id: 1},
      //     {text: 'Пушка', id: 2},
      //     {text: 'Оружие', id: 3},
      //     {text: 'Гусеничник', id: 4}
      //   ],
      // }
    ],
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

  render() {
    const { quiz, activeQuestion, answerState, results } = this.state;

    return (
      <div className={classes.Quiz}>
        {this.state.isQuizFinished ? (
          <FinishedQuiz>
            <QuizTitle>результаты теста</QuizTitle>
            <ResultsList results={results} quiz={quiz} />
            <Button onClick={this.retryHandler} type="primary">
              Повторить опрос
            </Button>
          </FinishedQuiz>
        ) : (
          <QuizWrapper>
            <QuizTitle>ответьте на все вопросы теста</QuizTitle>

            <ActiveQuiz
              quizLength={quiz.length}
              questionNumber={activeQuestion + 1}
              quiz={quiz[activeQuestion]}
              onAnswerClick={this.onAnswerClickHandler}
              answerState={answerState}
            />
          </QuizWrapper>
        )}
      </div>
    );
  }
}

export default Quiz;
