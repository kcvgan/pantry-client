import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { State } from '../redux/reducers/root.reducer';
import './App.css';
import DashboardPage from './dashboard/DashboardPage';
import HomePage from './home/HomePage';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/RegisterPage';

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
        <Route exact path="/register" component={RegisterPage} />
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
