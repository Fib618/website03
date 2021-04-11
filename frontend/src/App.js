import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import LandingPage from './LandingPage';
import LoginedPage from './LoginedPage';
import NavBar from './NavBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={history} >
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/logined" exact component={LoginedPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;