import React from 'react';
import classes from './AnswersItem.module.css';


const AnswersItem = ({text, id, onAnswerClick, answerState}) => {
  // console.log(answerState)
  const cls = [
    classes.AnswersItem
  ]

  if (answerState) {
    cls.push(classes[answerState]);
  }
  
  return (
      <li 
        className={cls.join(' ')}
        onClick={() => onAnswerClick(id)}
      >
        {text}
      </li>
  )
};

export default AnswersItem;