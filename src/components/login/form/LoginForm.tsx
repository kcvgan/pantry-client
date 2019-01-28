import React, { useState, ChangeEvent } from 'react';

const LoginForm = () => {
  const [values, setValues] = useState({ email: '', password: ''});
  
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value});
  }

  const handleSubmit = () => {
    1 + 2;
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label >
          Email:
          <input name="email" type="text" value={values.email} onChange={onChange}/>
        </label>
        <label >
          Password:
          <input name="password" type="text" value={values.password} onChange={onChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default LoginForm;