import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import ProductInfo from './ProductInfo';

const promise = loadStripe('pk_test_51KS0JYSAxSP4ZzaecnvaxNd9dlP7qUSilmafW9EnHhWwIDgZgNjQB884C5M4D4TA6vuM7GjDJ85oup73IBQRz537003HfEJHDk');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(
      authUser => {
        console.log("THE USER IS : ", authUser);

        if (authUser) {
          //user just logged in / user was logged in
          dispatch(
            {
              type: 'SET_USER',
              user: authUser
            }
          )
        }
        else {
          //user logged out
          dispatch(
            {
              type: 'SET_USER',
              user: null
            }
          )
        }
      })
  }, [])
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/productInfo'>
            <Header />
            <ProductInfo />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;