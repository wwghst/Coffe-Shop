// eslint-disable-next-line no-unused-vars
import FavAndCartBg from './assets/images/FavoriteAndCartTittleBg.png';
// eslint-disable-next-line no-unused-vars
import ShopBg from './assets/images/ShopTittleBg.png';
import { AboutShop, Footer, Header, ShopContent, Tittle } from './components';

import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Tittle text='Our Coffee' alt='coffee' imgName={ShopBg} />
      <AboutShop />
      <ShopContent />
    </div>
  );
};

export default App;
