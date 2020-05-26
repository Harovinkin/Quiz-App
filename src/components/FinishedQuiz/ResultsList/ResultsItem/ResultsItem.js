import React from 'react';
import classes from './ResultsItem.module.css';



const ResultsItem = ({question, result, number}) => {
  const cls = [
    'fa',
    result === 'error' ? 'fa-times' : 'fa-check',
    classes[result]
  ]
  
  return (
    <li className={classes.ResultsItem}>
      {number + '. '}<strong>{question}</strong>
      <i className={cls.join(' ')} />
    </li>
  )};

export default ResultsItem;