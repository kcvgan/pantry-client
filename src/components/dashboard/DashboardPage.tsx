import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import './DashboardPage.css';
import FillerParagrahps from './FillerParagraphs';

class DashboardPage extends Component {

  public render() {
    return (
      <div className={'dashboardWrapper'}>
        <main className={'dashboard'}>
          <div>
          <FillerParagrahps text={'hello'} times={50}/>
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