import React from 'react';
import classes from './TestWidget.module.css';
import WidgetBox from '../../WidgetBox/WidgetBox';

const testWidget = (props) => {
  return (
    <WidgetBox title={'Test Widget'} summary={'summary text'}>
      <div className={classes.TestWidget}>
        <input type="button" value={'Button text'}/>
      </div>
    </WidgetBox>
  );
};

export default testWidget;

