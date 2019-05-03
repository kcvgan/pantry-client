import React, { Component } from 'react';
import { Link }from 'react-router-dom';

class HomePage extends Component {
  public render() {
    return (
      <>
        <h1>Welcome to pantry</h1>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
      </>
    )
  }
};

export default HomePage;