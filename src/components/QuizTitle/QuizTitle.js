import React from 'react';
import classes from './QuizTitle.module.css';

const QuizTitle = (props) => (
  <h2 className={classes.QuizTitle}>
    {props.children}
  </h2>
  );

export default QuizTitle;