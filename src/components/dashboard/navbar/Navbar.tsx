import React, { Component } from "react";
import './Navbar.css';

class Navbar extends Component {
  
  public render() {
    return (
      <div className={'navIcons'}>
        <i className={'fas fa-carrot fa-3x'}></i>
        <i className={'fas fa-book fa-3x'}></i>
        <i className={'fas fa-user fa-3x'}></i>
      </div>
    )
  }
};

export default Navbar;