import React, { ChangeEvent, FC, useState } from 'react';
import LoginRequest from '../../../models/rest/login.request';
import Spinner from '../../utilComponents/spinner';
import './LoginForm.css';

const LoginForm: FC<{ submitUser: (loginRequest: LoginRequest) => void }> = ({ submitUser }) => {
  const [values, setValues] = useState<LoginRequest>({ usernameOrEmail: '', password: '' });
  const [wasLoginClicked, setLoginClicked] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  const onLoginClick = () => {
    setLoginClicked(true);
    submitUser(values);
  }

  const loginButtonContent = wasLoginClicked ? <Spinner /> : 'Submit';

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
      <button className={'pButton'} onClick={onLoginClick}>
        {loginButtonContent}
      </button>
    </>
  );
};

export default LoginForm;