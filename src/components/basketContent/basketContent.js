import { Component } from 'react';

import BasketImg from '../../assets/Basket.svg';
import Coffee from '../../assets/images/1.png';
import PlusBlackImg from '../../assets/PlusBlack.svg';

import './basketContent.scss';

export class BasketContent extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='basketContent'>
        <div className='basketContent__header'>
          <span className='basketContent__tittle pointer'>Favorites</span>
          <span className='basketContent__tittle-noHover'>/</span>
          <span className='basketContent__tittle pointer'>Cart</span>
        </div>
        <div className='basketContent__header gap'>
          <span className='basketContent__tittle-noHover'>Name</span>
          <span className='basketContent__tittle-noHover'>Count</span>
          <span className='basketContent__tittle-noHover'>Price</span>
        </div>
        {data.length > 0 ? (
          data.map((item) => (
            <div className='basketContent__content'>
              <div className='basketContent__cart'>
                <img className='basketContent__img' src={Coffee} alt='coffee' />
                <h1 className='basketContent__name'>{item.title}</h1>
                <h2 className='basketContent__count'>{item.weight}</h2>
                <h2 className='basketContent__price'>{item.price}$</h2>
                <div className='basketContent__buttons'>
                  <button className='basketContent__btn'>
                    <img src={PlusBlackImg} alt='plus' />
                  </button>
                  <button className='basketContent__btn'>
                    <img src={BasketImg} alt='basket' />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className='dataZero'>Add something to cart</h1>
        )}
        <div className='basketContent__buyBox'>
          <span className='basketContent__total'>Total: {data.length > 0 ? data[0].price * data.length : '0'}$</span>
          <button className='basketContent__buyBtn' type='submit'>
            Buy
          </button>
        </div>
      </div>
    );
  }
}
