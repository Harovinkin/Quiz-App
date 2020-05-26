import React from 'react';
import classes from './QuizWrapper.module.css';

const QuizWrapper = (props) => (
      <div className={classes.QuizWrapper}>
        {props.children}
      </div>
  );

export default QuizWrapper;