import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage';

// Router for navigation
const App = () => {
  return (
    <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/store" exact component={StorePage} />
        <Route path="/cart" exact component={CartPage} />
    </Router>
  );
};

export default App;
