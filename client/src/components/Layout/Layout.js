import React from 'react';
import classes from './Layout.module.css';
import TestWidget from '../widgets/TestWidget/TestWidget';
import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../Home';
import { Login } from '../User/login'

class Layout extends React.Component {

  render() {
    return (
      <Container fluid={true}>
        <h1 className={classes.header}>Covidhax landing page</h1>

        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/user/login">
              <Login />
            </Route>
          </Switch>
        </Router>

        <TestWidget/>
        <div className={classes.zipcode}>
          <label for="zipcode">Zipcode:</label>
          <input type="text" id="zipcode" value="Zipcode" name="zipcode"/>
        </div>
      </Container>
    );
  }
}

export default Layout;
