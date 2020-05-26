import React from 'react';
import classes from './AnswersList.module.css';

const AnswersList = (props) => (
      <ul className={classes.AnswersList}>
        {props.children}
      </ul>
  );

export default AnswersList;