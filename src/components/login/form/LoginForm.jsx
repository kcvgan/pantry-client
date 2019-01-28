import React, { useState } from React;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(`${email}:${password}`);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label >
          Email:
          <input type="text" value={email} onChange={setEmail}/>
        </label>
        <label >
          Password:
          <input type="text" value={password} onChange={setPassword}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default LoginForm;