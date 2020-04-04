import React, { Component } from 'react';
import classes from './Layout.module.css';
import TestWidget from '../widgets/TestWidget/TestWidget';

class Layout extends Component {

  render() {
    return (
      <>
        <div className={classes.layout}>
          <h1 className={classes.header}>Covidhax landing page</h1>
          <TestWidget/>
          <div className={classes.zipcode}>
            <label for="zipcode">Zipcode:</label>
            <input type="text" id="zipcode" value="Zipcode" name="zipcode"/>
          </div>
        </div>
      </>
    );
  }
}

export default Layout;
