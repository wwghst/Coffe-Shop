// eslint-disable-next-line no-unused-vars
import FavAndCartBg from './assets/images/FavoriteAndCartTittleBg.png';
// eslint-disable-next-line no-unused-vars
import ShopBg from './assets/images/ShopTittleBg.png';
import { AboutShop, Header, Tittle } from './components';

import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Tittle text='Favorites or Cart' alt='coffee' imgName={FavAndCartBg} />
      <AboutShop />
    </div>
  );
};

export default App;
