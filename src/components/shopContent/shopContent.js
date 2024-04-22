import React, { Component } from 'react';

import Img from '../../assets/images/1.png';
import Plus from '../../assets/Plus.svg';

import './shopContent.scss';

class ShopContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      loading: props.loading,
      error: props.error
    };
  }


  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div className='load'>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div className='shopContent'>
        <div className='shopContent__header'>
          <div className='shopContent__box'>
            <h2 className='shopContent__title'>Looking for</h2>
            <input className='shopContent__input' type='text' placeholder='start typing here...' />
          </div>
          <div className='shopContent__box'>
            <h2 className='shopContent__title'>Or filter</h2>
            <div className='shopContent__btns'>
              <button className='shopContent__btn' type='button'>
                Brazil
              </button>
              <button className='shopContent__btn' type='button'>
                Colombia
              </button>
              <button className='shopContent__btn' type='button'>
                Kenya
              </button>
            </div>
          </div>
        </div>
        <div className='shopContent__main'>
          {data.map((item, index) => (
            <div className='shopContent__cart' key={index}>
              <img src={Img} alt='cart' className='shopContent__cartImg' />
              <h2 className='shopContent__title'>{item.title}</h2>
              <div className='shopContent__cartFooter'>
                <button className='shopContent__plusBtn' type='button'>
                  <img src={Plus} alt='plus' />
                </button>
                <div className='shopContent__count'>
                  <h2 className='shopContent__title'>{item.city}</h2>
                  <h2 className='shopContent__price'>{item.price}$</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export { ShopContent };
