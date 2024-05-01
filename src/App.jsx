import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import FavAndCartBg from './assets/images/FavoriteAndCartTittleBg.png';
// eslint-disable-next-line no-unused-vars
import { BasketPage, FavoritesPage, Home, ShopPage } from './pages';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: []
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

  render() {
    const { loading, data, error } = this.state;
    if (!loading && !error) {
      return (
        <BrowserRouter>
          <Routes>
            <Route exact path='/Coffe-Shop' element={<Home data={data} />} />
            <Route
              path='/shop'
              element={<ShopPage data={data} loading={loading} error={error} />}
            />
            <Route
              path='/favorites'
              element={<FavoritesPage data={data} loading={loading} error={error} />}
            />
            <Route
              path='/basket'
              element={<BasketPage data={data} loading={loading} error={error} />}
            />
          </Routes>
        </BrowserRouter>
      );
    }
  }
}

export default App;
