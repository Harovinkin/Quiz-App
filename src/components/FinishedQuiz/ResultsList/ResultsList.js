import React from 'react';
import classes from './ResultsList.module.css';
import ResultsItem from './ResultsItem/ResultsItem';

const ResultsList = ({results, quiz}) => (
      <ul className={classes.ResultsList}>
        {
          quiz.map((quizItem, idx) => (
            <ResultsItem 
              key={idx}
              question={quizItem.question}
              result={results[quizItem.id]}
              number={quizItem.id}
            />
          ))
        }
        
      </ul>
  );

export default ResultsList;

