import { Component } from 'react';

import LogoBlack from '../../assets/LogoBlack.svg';
import LogoOne from '../../assets/LogoOne.svg';

import './sectionTitle.scss';

export class SectionTitle extends Component {
  constructor(props) {
    super(props);

    const { color } = this.props;
    this.styleColor = color;
  }

  render() {
    return (
      <div>
        <span className='section__title' style={{ '--color': `${this.styleColor}` }}>
          {this.styleColor === 'white' || this.styleColor === '#fff' ? (
            <img src={LogoOne} alt='' />
          ) : (
            <img src={LogoBlack} alt='' />
          )}
        </span>
      </div>
    );
  }
}
