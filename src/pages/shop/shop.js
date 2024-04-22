import { Component } from 'react';

import ShopBg from '../../assets/images/ShopTittleBg.png';
import { AboutShop, Footer, Header, ShopContent, Tittle } from '../../components';

import './shop.scss';

export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://66169b81ed6b8fa43480e96b.mockapi.io/carts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          data,
          loading: false
        });
        return data;
      })
      .catch((error) => {
        this.setState({
          error: error.message,
          loading: false
        });
        return error;
      });
  }

  render() {
    const { data, loading, error } = this.state;
    return (
      <div className='container'>
        <Header />
        <Tittle text='Our Coffee' alt='coffee' imgName={ShopBg} />
        <AboutShop />
        <ShopContent data={data} loading={loading} error={error} />
        <Footer color='#000' />
      </div>
    );
  }
}
