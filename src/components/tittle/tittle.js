import { Component } from 'react';

import './tittle.scss';

class Tittle extends Component {
  render() {
    const { imgName, alt, text } = this.props;
    return (
      <div className='tittleShop'>
        <img src={imgName} alt={alt} className='tittleShop__bg' />
        <h1 className='tittleShop__title'>{text}</h1>
      </div>
    );
  }
}

export { Tittle };
