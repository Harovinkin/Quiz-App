import React from 'react';
import classes from './Question.module.css';

const Question = ({quiz, questionNumber, quizLength}) => (
      <div className={classes.Question}>
        <p>
          <span>{questionNumber}.</span>&nbsp;
          {quiz.question}
        </p>
        <span>{questionNumber} из {quizLength}</span>
      </div>
  );

export default Question;