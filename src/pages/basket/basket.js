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

  render() {
    const { data, loading, error } = this.state;
    const visibleData = data.filter((item) => item.inCart === true);
    return (
      <div className='container'>
        <Header />
        <Tittle text='Cart' alt='coffee' imgName={BasketBg} />
        <BasketContent data={visibleData} loading={loading} error={error} />
        <Footer color='#000' />
      </div>
    );
  }
}
