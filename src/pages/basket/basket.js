import { Component } from 'react';

import BasketBg from '../../assets/images/cartAndBasketBg.png';
import { Footer, Header, Tittle } from '../../components';

import './basket.scss';

export class BasketPage extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Tittle text='Cart' alt='coffee' imgName={BasketBg} />
        <Footer color='#000' />
      </div>
    );
  }
}
