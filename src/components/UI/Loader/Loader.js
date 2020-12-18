import React from 'react';
import classes from './Loader.module.css';

function Loader() {
  return (
    <div>
      <div className={classes.Loader}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default Loader;