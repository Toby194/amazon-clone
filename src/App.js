import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

{
  /* We need React-ROUTER 👇 */
}

const promise = loadStripe(
  'pk_test_51HPveBBEKKuTCSAwgzucQuG4Iamf3r8aRY7GneaOIUMLfzTz1Ecg8hxgV5LCRF6mp8q6tjuKk2B9gmYq9xWfdhGT00pgvmfqBc'
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

  return (
    // BEM Component

    <Router>
      <div className="app">
        <Switch>
          {/* localhost.com/orders */}
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          {/* localhost.com/checkout */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          {/* localhost.com/login */}
          <Route path="/login">
            <Login />
          </Route>

          {/* This is the default route should always be  */}
          {/* localhost.com */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
