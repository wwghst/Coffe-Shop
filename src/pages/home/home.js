import React, { Component } from 'react';

import { AboutHome, Footer, Header, HomeCards, TittleHome } from '../../components';

import './home.scss';

export class Home extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <Header />
          <TittleHome />
          <AboutHome />
        </div>

        <HomeCards />
        <Footer />
      </>
    );
  }
}
