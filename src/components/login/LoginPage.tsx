import React, { Component } from 'react';
import LoginForm from './form/LoginForm';
import './LoginPage.css';
import * as authService from '../../services/auth.service';
import User from '../../models/user.model';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../../redux/reducers/root.reducer';
import { ActionTypes } from '../../redux/actions/user.actions';

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

  submit = (user: User) => {
    authService.signIn(user)
      .then((value) => {
        const tokenAction = {
          type: ActionTypes.AUTHENTICATED_USER,
          payload: {
            token: value
          }
        };
        if (this.props.dispatch) {
          this.props.dispatch(tokenAction);
        };
      });
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
        <LoginForm submitUser={(user: User) => this.submit(user)}
          registerUser={(user: User) => this.register(user)}
          registerButtonState={registered} />
      </div>
    )
  }
};

const mapStateToProps = (state: State): LoginPageProps => ({
  token: state.token.token
});

export default connect(mapStateToProps)(LoginPage);