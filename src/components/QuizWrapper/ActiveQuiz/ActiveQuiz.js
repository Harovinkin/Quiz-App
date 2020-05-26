import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';
import Question from './Question/Question';
import AnswersItem from './AnswersList/AnswersItem/AnswersItem';

const ActiveQuiz = ({onAnswerClick, answerState, ...props}) => (
      <div className={classes.ActiveQuiz}>
        <Question 
          {...props}
        />
        
        <AnswersList>
          {
            props.quiz.answers.map((answer, idx) => (
              <AnswersItem 
                key={idx}
                onAnswerClick={onAnswerClick}
                answerState={answerState ? answerState[answer.id] : null}
                {...answer}
              />
            ))
          }
          
        </AnswersList>
      </div>
  );

export default ActiveQuiz;