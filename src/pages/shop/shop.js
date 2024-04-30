import React, { Component } from 'react';

import ShopBg from '../../assets/images/ShopTittleBg.png';
import { AboutShop, Footer, Header, ShopContent, Tittle } from '../../components';

import './shop.scss';

export class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: props.loading,
      error: props.error,
      data: props.data,
      filter: '',
      search: ''
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

  onPut = (key, btnId) => {
    const { data } = this.state;
    if (btnId === 'favorite') {
      fetch(`https://66169b81ed6b8fa43480e96b.mockapi.io/carts/${key}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          favorite: true
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
              return { ...item, favorite: true };
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
    } else if (btnId === 'basket') {
      fetch(`https://66169b81ed6b8fa43480e96b.mockapi.io/carts/${key}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inCart: true
        })
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to update cart status');
          }
          return response.json();
        })
        .then(() => {
          const updatedData = data.map((item) => {
            if (item.id === key) {
              return { ...item, inCart: true };
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
          console.error('Failed to update cart status:', error);
        });
    }
  };

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
        <ShopContent
          data={visibleData}
          loading={loading}
          error={error}
          onFilter={this.onFilter}
          onSearch={this.onSearch}
          onPut={this.onPut}
        />

        <Footer color='#000' />
      </div>
    );
  }
}
