import React from 'react';
import classes from './TestWidget.module.css';
import WidgetBox from '../../WidgetBox/WidgetBox';

const testWidget = (props) => {
  return (
    <WidgetBox>
      <div className={classes.TestWidget}>
        <h4>TestWidget</h4>
      </div>
    </WidgetBox>
  );
};

export default testWidget;
