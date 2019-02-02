import React, { useState, ChangeEvent } from 'react';
import './LoginForm.css';
import User from '../../../models/user.model';

export interface LoginFormProps {
  submitUser(user: User): void;
  registerUser(user: User): void;
  registerButtonState: boolean;
}

const LoginForm = (props: LoginFormProps) => {
  const [values, setValues] = useState({ email: '', password: ''});
  
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value});
  }

  const { submitUser, registerUser, registerButtonState } = props;

  const isRegistered = (registerButtonState: boolean): string => {
    if(registerButtonState) {
      return 'pButtonRegistered';
    } else {
      return 'pButton';
    }
  }

  return (
    <>
      <input onChange={onChange} name="email" className={'pTextInput'} type="text" placeholder="Email"/>
      <input onChange={onChange} name="password" className={'pTextInput'} type="password" placeholder="Password"/>
      <button className={'pButton'} onClick={() => submitUser(values)}>Submit</button>
      <button className={isRegistered(registerButtonState)} onClick={() => registerUser(values)}>
      {registerButtonState ? 'Success!' : 'Register'}
      </button>
    </>
  );
};

export default LoginForm;