import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import DashboardPage from './dashboard/DashboardPage';
import HomePage from './home/HomePage';
import LoginPage from './login/LoginPage';
import './App.css';
import { State } from '../redux/reducers/rootReducer';
import { connect } from 'react-redux';

export interface AppProps {
  token?: string
}

const App = (props: AppProps) => {

  if (props.token) {
    return (
      <Router>
        <Switch>
          <Route exact path="/dash" component={DashboardPage} />
          <Redirect from="/login" to="/dash" />
        </Switch>
      </Router>
    );
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Redirect from="/dash" to="/login" />
      </Switch>
    </Router >
  );

};

const mapStateToProps = (state: State): AppProps => ({
  token: state.token.token
});

export default connect(mapStateToProps)(App);
