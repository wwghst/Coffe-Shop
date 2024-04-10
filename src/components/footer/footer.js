import { Component } from 'react';

import LogoOne from '../../assets/LogoOne.svg';
import { SectionTitle } from '../sectionTitle/sectionTitle';

import './footer.scss';

export class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__menu'>
          <div>
            <img src={LogoOne} alt='logo' className='footer__logo' />
            <a href='#!' className='footer__link'>
              Coffee house
            </a>
          </div>
          <a href='#!' className='footer__link'>
            Our coffee
          </a>
          <a href='#!' className='footer__link'>
            Favorite / Basket
          </a>
        </div>

        <SectionTitle color='#fff' />
      </footer>
    );
  }
}
