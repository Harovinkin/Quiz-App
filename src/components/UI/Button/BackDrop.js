import React from 'react';
import classes from './BackDrop.module.css';

const BackDrop = ({onClose}) => (
      <div 
        className={classes.BackDrop}
        onClick={onClose}
      ></div>
  );

export default BackDrop;