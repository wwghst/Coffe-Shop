import React, { Component } from 'react';

import Img from '../../assets/images/1.png';
import Plus from '../../assets/Plus.svg';

import './shopContent.scss';

class ShopContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      search: ''
    };
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props;
    if (prevProps.data !== data) {
      this.setState({
        data
      });
    }
  }

  onSearch = (e) => {
    const { onSearch } = this.props;
    const search = e.target.value;
    this.setState({ search });
    onSearch(search);
  };

  render() {
    const { data, search } = this.state;
    const { onFilter } = this.props;

    const buttonsData = [
      { name: 'Brazil', label: 'Brazil' },
      { name: 'Columbia', label: 'Colombia' },
      { name: 'Kenya', label: 'Kenya' },
      { name: 'All', label: 'All' }
    ];

    return (
      <div className='shopContent'>
        <div className='shopContent__header'>
          <div className='shopContent__box'>
            <h2 className='shopContent__title'>Looking for</h2>
            <input
              className='shopContent__input'
              type='text'
              placeholder='start typing here...'
              onChange={this.onSearch}
              value={search}
            />
          </div>
          <div className='shopContent__box'>
            <h2 className='shopContent__title'>Or filter</h2>
            <div className='shopContent__btns'>
              {buttonsData.map(({ name, label }) => (
                <button
                  className='shopContent__btn'
                  type='button'
                  key={name}
                  onClick={() => onFilter(name)}
                >
                  {label}
                </button>
              ))}
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
