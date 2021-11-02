import React from 'react';
import HeaderMenu from './Header/HeaderMenu';
import './ShopBody/ShopBody.css'
import Cart from './Cart';
import ShopBody from './ShopBody/ShopBody';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { setPhones } from './redux/actions/phones'
import { connect } from 'react-redux'
//import store from './redux/Store';

  // function App() {
  //   const [phones, setPhones] = React.useState([]);

  //   React.useEffect (() => {
    
    
  //   }, []);

    

  //   return ;
  // }

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
     this.props.dispatch(setPhones(data.phones));
    });
  }

  render () {
    return (
      <div className="App">
        <HeaderMenu />
        <div className="shopBody">
        <Route exact path="/" render={() => <ShopBody items={this.props.items}/>} />
        <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.phones.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPhones: (items) => dispatch(setPhones(items))
  };
}

export default connect(mapStateToProps)(App);