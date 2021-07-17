import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import SignUp from './Components/Pages/SignUp';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
