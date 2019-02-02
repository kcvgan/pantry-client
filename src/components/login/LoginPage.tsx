import React, { Component, useState} from 'react';
import LoginForm from './form/LoginForm';
import './LoginPage.css';
import * as authService from '../../services/auth.service';
import User from '../../models/user.model';
import { Redirect } from 'react-router';

export interface LoginPageState {
  loggedIn: boolean;
  registered: boolean;
}

const initialState: LoginPageState = { loggedIn: false, registered: false };

class LoginPage extends Component<object, LoginPageState> {
  state: LoginPageState = initialState;
  
  submit = (user: User) => {
    authService.signIn(user)
      .then((value) => {
        this.setState({loggedIn: Boolean(value)});
    });
  };

  register = (user: User) => {
    authService.signUp(user)
      .then((value) => {
        this.setState({registered: value});
      });
  }

  public render() {
    const { loggedIn, registered } = this.state;
    if(loggedIn) {
      return <Redirect to='/dash'/>
    }

    return (
      <div className={'loginContainer'}>
        <LoginForm submitUser={(user: User) => this.submit(user)} 
                  registerUser={(user: User) => this.register(user)}
                  registerButtonState={registered}>
        </LoginForm>
      </div>
    )
  }
};

export default LoginPage;