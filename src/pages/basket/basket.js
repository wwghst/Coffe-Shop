import { Component } from 'react';

import BasketBg from '../../assets/images/cartAndBasketBg.png';
import { BasketContent, Footer, Header, Tittle } from '../../components';

import './basket.scss';

export class BasketPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      loading: props.loading,
      error: props.error
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

  onDelete = (key) => {
    const { data } = this.state;
    fetch(`https://66169b81ed6b8fa43480e96b.mockapi.io/carts/${key}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inCart: false
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update favorite status');
        }
        return response.json();
      })
      .then(() => {
        const updatedData = data.map((item) => {
          if (item.id === key) {
            return { ...item, inCart: false };
          }
          return item;
        });
        return updatedData;
      })
      .then((updatedData) => {
        this.setState({ data: updatedData });
        return data;
      })
      .catch((error) => {
        console.error('Failed to update favorite status:', error);
      });
  };

  onPlus = (item, key) => {
    const { data } = this.state;
    const updatedData = data.map((item) => {
      if (item.id === key) {
        return {
          ...item,
          weight: item.weight + 1,
          price: Math.floor(item.price + 6.99)
        };
      }
      return item;
    });
    this.setState({ data: updatedData });
  };

  render() {
    const { data, loading, error } = this.state;
    const visibleData = data.filter((item) => item.inCart === true);
    return (
      <div className='container'>
        <Header />
        <Tittle text='Basket' alt='coffee' imgName={BasketBg} />
        <BasketContent
          data={visibleData}
          loading={loading}
          error={error}
          onDelete={this.onDelete}
          onPlus={this.onPlus}
        />
        <Footer color='#000' />
      </div>
    );
  }
}
