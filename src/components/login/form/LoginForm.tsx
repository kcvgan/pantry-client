import React, { useState, ChangeEvent, ReactNode } from 'react';
import './LoginForm.css';
import User from '../../../models/user.model';
import Spinner from '../../utilComponents/spinner';

export interface LoginFormProps {
  submitUser(user: User): void;
  registerUser(user: User): void;
  registerButtonState: boolean;
}

const LoginForm = (props: LoginFormProps) => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [isLoginClicked, setLoginClicked] = useState(false);
  const [isRegisterClicked, setRegisterClicked] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const { submitUser, registerUser, registerButtonState } = props;

  const isRegistered = (registerButtonState: boolean): string => {
    if (registerButtonState) {
      return 'pButtonRegistered';
    } else {
      return 'pButton';
    }
  }

  const onLoginClick = () => {
    setLoginClicked(true);
    submitUser(values);
  }

  const onRegisterClick = () => {
    setRegisterClicked(true);
    registerUser(values);
  }

  const loginButton = isLoginClicked ? <Spinner /> : 'Submit';

  const registerButtonContents = () => {
    if (!registerButtonState) {
      if (isRegisterClicked) {
        return <Spinner />;
      } else {
        return 'Register';
      }
    } else {
      return 'Success';
    }
  };

  return (
    <>
      <input onChange={onChange} name="email" className={'pTextInput'} type="text" placeholder="Email" />
      <input onChange={onChange} name="password" className={'pTextInput'} type="password" placeholder="Password" />
      <button className={'pButton'} onClick={onLoginClick}>
        {loginButton}
      </button>
      <button className={isRegistered(registerButtonState)} onClick={onRegisterClick}>
        {registerButtonContents()}
      </button>
    </>
  );
};

export default LoginForm;