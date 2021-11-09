import React from 'react';
import HeaderMenu from './Header/HeaderMenu';
import './ShopBody/ShopBody.css'
import Cart from './Cart';
import ShopBody from './ShopBody/ShopBody';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { setPhones } from './redux/actions/phones';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();


  React.useEffect(() => {
      axios.get('http://localhost:3001/phones').then(({data}) => {
          dispatch(setPhones(data));
            });
    }, []);

  return(
      <div className="App">
      <HeaderMenu />
      <div className="shopBody">
      <Route exact path="/" component={ShopBody}  />
      <Route exact path="/cart" component={Cart} />
      </div>
    </div>
    )

}

export default App;
