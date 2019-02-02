import React, { Component } from "react";
import './Navbar.css';

class Navbar extends Component {
  
  public render() {
    return (
      <div className={'navIcons'}>
        <i className={'fas fa-carrot fa-3x'}><span className={'navText'}>Pantry</span></i>
        <i className={'fas fa-book fa-3x'}><span className={'navText'}>Recipes</span></i>
        <i className={'fas fa-user fa-3x'}><span className={'navText'}>Profile</span></i>
      </div>
    )
  }
};

export default Navbar;