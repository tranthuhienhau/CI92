import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Introduce from './components/intro/Introduce';
import Content from './components/Contents/Content';
import Search from './components/pages/Search';
import FAQ from './components/FAQ';
import Phimbo from './components/Phimbo';
import Phimmoi from './components/Phimmoi';
import PhimHot from './components/pages/PhimHot';
import Footer from './components/Footer';
import './App.css';
import data from './data.json';
import axios from 'axios';
import ProductDetail from './components/Products/ProductDetail';
import WatchMovie from './components/Products/WatchMovie';
const HomePage = () => {
  return (
    <div>
      <Introduce />
      <Content />
    </div>
  );
}

const App = () => {
 
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search data={data} />} />
          <Route path="/hotmovies" element={<PhimHot />} />
          <Route path="/phimbo" element={<Phimbo />} />
          <Route path="/phimmoi" element={<Phimmoi />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path='/:id' element={<ProductDetail />}/>
        <Route path='/:id/:movieName' element={<WatchMovie />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
