import { Component } from 'react';

import LogoOne from '../../assets/LogoOne.svg';
import { SectionTitle } from '../sectionTitle/sectionTitle';

import './footer.scss';

export class Footer extends Component {
  constructor(props) {
    super(props);

    const { color, logoColor } = this.props;
    this.styleColor = color;
    this.logoColor = logoColor;
  }

  render() {
    return (
      <footer className='footer'>
        <div className='footer__menu' style={{ color: this.styleColor ?? '#000' }}>
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

        <SectionTitle color={this.logoColor ?? this.styleColor ?? '#000'} />
      </footer>
    );
  }
}
