import React, { Component } from 'react';

import ShopBg from '../../assets/images/ShopTittleBg.png';
import { AboutShop, Footer, Header, ShopContent, Tittle } from '../../components';

import './shop.scss';

export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: [], // Инициализируем data пустым массивом
      filter: '',
      search: ''
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
      });
  }

  onFilter = (filter) => {
    this.setState({ filter });
  };

  onSearch = (search) => {
    this.setState({ search });
  };

  searchEmp = (items) => {
    const { search } = this.state;
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.title.indexOf(search) > -1;
    });
  };

  filterPosts(items) {
    const { filter } = this.state;
    switch (filter) {
      case 'Brazil':
        return items.filter((item) => item.city === 'Brazil');
      case 'Columbia':
        return items.filter((item) => item.city === 'Columbia');
      case 'Kenya':
        return items.filter((item) => item.city === 'Kenya');
      default:
        return items;
    }
  }

  render() {
    const { data, loading, error } = this.state;
    const visibleData = this.filterPosts(this.searchEmp(data));
    return (
      <div className='container'>
        <Header />
        <Tittle text='Our Coffee' alt='coffee' imgName={ShopBg} />
        <AboutShop />
        {!loading && !error && (
          <ShopContent
            data={visibleData}
            loading={loading}
            error={error}
            onFilter={this.onFilter}
            onSearch={this.onSearch}
          />
        )}
        <Footer color='#000' />
      </div>
    );
  }
}
