import React, { Component, useState} from 'react';

class LoginPage extends Component {
  const [user, setUser] = useState({})
  
  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label >
            Email:
            <input type="text" value={''} onChange={this.handleChange}/>
          </label>
          <label >
            Password:
            <input type="text" value={''} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
};

export default LoginPage;