import { Component } from 'react';

import LogoOne from '../../assets/LogoOne.svg';

import './header.scss';

export class Header extends Component {
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
        <div className='header__links'>
          <a href='#!' className='header__link'>
            Favorites
          </a>
          <span className='header__line'>/</span>
          <a href='#!' className='header__link'>
            Basket
          </a>
        </div>
      </header>
    );
  }
}
