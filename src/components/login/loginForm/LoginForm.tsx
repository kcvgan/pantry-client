import React, { ChangeEvent, FC, useState } from 'react';
import LoginRequest from '../../../models/rest/login.request';
import './LoginForm.css';
import Button from '../../utilComponents/button';

const LoginForm: FC<{ submitUser: (loginRequest: LoginRequest) => void }> = ({ submitUser }) => {
  const [values, setValues] = useState<LoginRequest>({ usernameOrEmail: '', password: '' });
  const [wasLoginClicked, setLoginClicked] = useState<boolean>(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const onLoginClick = () => {
    setLoginClicked(true);
    submitUser(values);
  }
  
  return (
    <>
      <input
        onChange={onChange}
        name="usernameOrEmail"
        className={'pTextInput'}
        type="text"
        placeholder="Email or Username" />
      <input
        onChange={onChange}
        name="password"
        className={'pTextInput'}
        type="password"
        placeholder="Password" />
      <Button onClick={onLoginClick} isLoading={wasLoginClicked}>
        Submit
      </Button>
    </>
  );
};

export default LoginForm;