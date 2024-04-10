import { Component } from 'react';

import ShopBg from '../../assets/images/ShopTittleBg.png';

import './tittleShop.scss';

class TittleShop extends Component {
  render() {
    return (
      <div className='tittleShop'>
        <img src={ShopBg} alt='homeBg' className='tittleShop__bg' />
        <h1 className='tittleShop__title'>Our Coffee</h1>
      </div>
    );
  }
}

export { TittleShop };
