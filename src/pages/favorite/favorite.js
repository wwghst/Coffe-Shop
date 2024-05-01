import { Component } from 'react';

import BlackHeart from '../../assets/BlackHeart.svg';
import Heart from '../../assets/Heart.svg';
import Img from '../../assets/images/1.png';
import BasketBg from '../../assets/images/cartAndBasketBg.png';
import Plus from '../../assets/Plus.svg';
import { Footer, Header, Tittle } from '../../components';

import './favorite.scss';

export class FavoritesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  componentDidUpdate(prevProps) {
    const { data, loading, error } = this.props;
    if (prevProps.data !== data || prevProps.loading !== loading || prevProps.error !== error) {
      this.setState({
        loading,
        error,
        data
      });
    }
  }

  onAdded = (id, item) => {
    fetch(`https://66169b81ed6b8fa43480e96b.mockapi.io/carts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inCart: !item.inCart
      })
    });
    fetch(`https://66169b81ed6b8fa43480e96b.mockapi.io/carts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }))
      .catch((err) => console.log(err));
  };

  onFavorite = (id) => {
    fetch(`https://66169b81ed6b8fa43480e96b.mockapi.io/carts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favorite: false
      })
    });

    fetch(`https://66169b81ed6b8fa43480e96b.mockapi.io/carts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }))
      .catch((err) => console.log(err));
  };

  render() {
    const { data, loading, error } = this.state;

    if (error) return <span>Error</span>;
    if (loading) return <span>Loading...</span>;

    return (
      <div className='container'>
        <Header />
        <Tittle text='Favorites' alt='coffee' imgName={BasketBg} />

        {!data.filter((item) => item.favorite).length ? (
          <span className='favorites__notDate'>Add something to favotire</span>
        ) : (
          <ul className='favorites__cards'>
            {data
              .filter((item) => item.favorite)
              .map((item) => (
                <li className='shopContent__cart'>
                  <button
                    className='shopContent__favBtn'
                    type='button'
                    onClick={() => this.onFavorite(item.id)}
                  >
                    <img
                      src={item.favorite ? BlackHeart : Heart}
                      alt='heart'
                      className='shopContent__heartImg'
                    />
                  </button>
                  <img src={Img} alt='cart' className='shopContent__cartImg' />
                  <h2 className='shopContent__title'>
                    {item.title}
                    {item.weight}
                  </h2>
                  <div className='shopContent__cartFooter'>
                    <button
                      className='shopContent__plusBtn'
                      type='button'
                      onClick={() => this.onAdded(item.id, item)}
                    >
                      <img src={Plus} alt='plus' />
                    </button>
                    <div className='shopContent__count'>
                      <h2 className='shopContent__title'>{item.city}</h2>
                      <h2 className='shopContent__price'>{item.price}$</h2>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        )}

        <Footer color='#000' />
      </div>
    );
  }
}
