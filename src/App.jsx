import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/Navbar/Navbar';
import Introduce from './components/intro/Introduce';
import Content from './components/Contents/Content';
import Search from './components/pages/Search';
import FAQ from './components/pages/FAQ';
import Phimbo from './components/pages/Phimbo';
import Phimle from './components/pages/Phimle'
import PhimHot from './components/pages/PhimHot';
import Footer from './components/Footer';
import './App.css';
import data from './data.json';
import axios from 'axios';
import ProductDetail from './components/Products/ProductDetail';
import WatchMovie from './components/Products/WatchMovie';


const HomePage = () => {
  const {t} = useTranslation()
  return (
    <div>
      <Introduce />
      <Content />
    
    </div>
  );
}

const App = () => {
  const HideNavbarPaths = ['/login', '/register'];

  const NavbarWithRouteCheck = () => {
    let location = useLocation();
    return !HideNavbarPaths.includes(location.pathname) && <Navbar />;
  };

  const FooterWithRouteCheck = () =>{
    let location = useLocation ();
    return !HideNavbarPaths.includes(location.pathname) && <Footer />;
  }

  return (
    <Router>
      <div className='container'>
        <NavbarWithRouteCheck />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path="/search" element={<Search data={data} />} />
          <Route path="/hotmovies" element={<PhimHot />} />
          <Route path="/phimbo" element={<Phimbo />} />
          <Route path="/phimle" element={<Phimle />} />

          <Route path="/faq" element={<FAQ />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/:id" element={<WatchMovie />} />
        </Routes>
        <FooterWithRouteCheck />
      </div>
    </Router>
  );
}

export default App;
