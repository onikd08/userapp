import React from 'react';
import './App.css';
import HomePage from './components/Home/Home'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import UserDetails from './components/UserDetails/UserDetails'

function App() {

  return (
    <div>


      <Header />
      <Router>
        <Switch>
          <Route path="/homepage">
            <HomePage />
          </Route>
          <Route path="/user/:id">
            <UserDetails />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <Footer />


    </div>
  );
}

export default App;
