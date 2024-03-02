import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Introduce from './components/intro/Introduce';
import Content from './components/Contents/Content';
import ProductDetail from './components/Products/ProductDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Introduce />
        <Switch>
          <Route path="/" exact component={Content} />
          <Route path="/product/:id" component={ProductDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
