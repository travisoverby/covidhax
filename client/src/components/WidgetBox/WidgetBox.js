import React from 'react';
import classes from './WidgetBox.module.css';

const widgetBox = (props) => {

  return (
    <div className={classes.WidgetBox}>
      {props.children}
    </div>
  );
};

export default widgetBox;
