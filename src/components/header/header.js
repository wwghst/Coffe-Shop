import { Component } from 'react';
import {Link} from "react-router-dom"

import LogoOne from '../../assets/LogoOne.svg';

import './header.scss';

export class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div>
          <img src={LogoOne} alt='logo' className='header__logo' />
          <Link to="/Coffe-Shop" className='header__link' >Home</Link>
        </div>
        <Link to="/shop" className='header__link' >Our Coffee</Link>
        <div className='header__links'>
        <Link to="/favorites" className='header__link' >Favorites</Link>
          <span className='header__line'>/</span>
          <Link to="/basket" className='header__link' >Basket</Link>
        </div>
      </header>
    );
  }
}
