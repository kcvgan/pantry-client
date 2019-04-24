import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Dispatch } from 'redux';
import LoginRequest from '../../models/rest/login.request';
import User from '../../models/user.model';
import { authenticatedUser } from '../../redux/actions/user.actions';
import { State } from '../../redux/reducers/root.reducer';
import * as authService from '../../services/auth.service';
import LoginForm from './form/LoginForm';
import './LoginPage.css';

export interface LoginPageProps {
  token?: string;
  dispatch?: Dispatch;
};

export interface LoginPageState {
  loggedIn: boolean;
  registered: boolean;
  isLoading: false;
};

const initialState: LoginPageState = { loggedIn: false, registered: false, isLoading: false };

class LoginPage extends Component<LoginPageProps, LoginPageState> {
  constructor(props: LoginPageProps) {
    super(props);
  };

  state: LoginPageState = initialState;

  submit = async (loginRequest: LoginRequest) => {
    const [token, error] = await authService.signIn(loginRequest);
    if (token) {
      this.props.dispatch(authenticatedUser(token))
    }
  };

  register = (user: User) => {
    authService.signUp(user)
      .then((value) => {
        this.setState({ registered: value });
      });
  }

  public render() {
    const { loggedIn, registered } = this.state;
    if (loggedIn) {
      return <Redirect to='/dash' />
    }

    return (
      <div className={'loginContainer'}>
        <LoginForm
          submitUser={(LoginRequest: LoginRequest) => this.submit(LoginRequest)}
        />
        <button onClick={() => console.log('trying to register')}>Register</button>
      </div>
    )
  }
};

const mapStateToProps = (state: State): LoginPageProps => ({
  token: state.token.token
});

export default connect(mapStateToProps)(LoginPage);