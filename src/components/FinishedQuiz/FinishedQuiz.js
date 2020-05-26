import React from 'react';
import classes from './FinishedQuiz.module.css';

const FinishedQuiz = (props) => (
      <div className={classes.FinishedQuiz}>
        {props.children}
      </div>
  );

export default FinishedQuiz;