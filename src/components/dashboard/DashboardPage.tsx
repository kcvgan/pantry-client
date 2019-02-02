import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import './DashboardPage.css';
import PantryContainer from './pantryContainer/PantryContainer';

class DashboardPage extends Component {

  public render() {
    return (
      <div className={'dashboardWrapper'}>
        <main className={'dashboard'}>
          <div>
            <PantryContainer/>
          </div>
        </main>
        <nav className={'navbar'}>
          <Navbar></Navbar>
        </nav>
      </div>
    )
  }
};

export default DashboardPage;