import { Component } from 'react';

import LogoOne from '../../assets/LogoOne.svg';

import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div>
          <img src={LogoOne} alt='logo' className='header__logo' />
          <a href='#!' className='header__link'>
            Coffee house
          </a>
        </div>
        <a href='#!' className='header__link'>
          Our coffee
        </a>
        <a href='#!' className='header__link'>
          Favorite / Basket
        </a>
      </header>
    );
  }
}

export { Header };
