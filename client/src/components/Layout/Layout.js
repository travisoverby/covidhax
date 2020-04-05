import React, { Component } from 'react';
import classes from './Layout.module.css';
import TestWidget from '../widgets/TestWidget/TestWidget';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home';
import { Login } from '../User/login'
import { Registration } from '../User/registration';
import Dashboard from '../Charity/Dashboard';

class Layout extends Component {

  render() {
    return (
      <Container fluid={true}>
        <div className={classes.layout}>
          <h1 className={classes.header}>Covidhax landing page</h1>

          <TestWidget/>

          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/user/login">
                <Login />
              </Route>
              <Route path="/user/registration">
                <Registration />
              </Route>
              <Route path="/charities/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </Router>

          <div className={classes.zipcode}>
            <label for="zipcode">Zipcode:</label>
            <input type="text" id="zipcode" value="Zipcode" name="zipcode"/>
          </div>
        </div>
      </Container>
    );
  }
}

export default Layout;
