import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Introduce from './components/intro/Introduce';
import Content from './components/Contents/Content';
import ProductDetail from './components/Products/ProductDetail';
import Search from './components/pages/Search';
import FAQ from './components/FAQ';
import Phimbo from './components/Phimbo';
import Phimmoi from './components/Phimmoi';
import PhimHot from './components/pages/PhimHot';
import './App.css'
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path="/content" element={<Content />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/phimbo" element={<Phimbo />} />
          <Route path="/phimmoi" element={<Phimmoi />} />
          <Route path="/hotmovies" element={<PhimHot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
