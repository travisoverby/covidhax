import React from 'react';
import classes from './WidgetBox.module.css';

const widgetBox = (props) => {

  return (
    <div className={classes.WidgetBox}>
      <h4>{props.title}</h4>
      <p>{props.summary}</p>
      {props.children}
    </div>
  );
};

export default widgetBox;
