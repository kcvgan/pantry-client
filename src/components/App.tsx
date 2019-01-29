import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import HomePage from './home/HomePage';
import './App.css';
import DashboardPage from './dashboard/DashboardPage';

class App extends Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dash" component={DashboardPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
