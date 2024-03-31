import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import About from './About';


function App() {
  return (
    <Router>
       <Routes>
      <Route path="/products" element={<ProductList /> } />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/about" element={<About />}  />
      </Routes>
      </Router>
  );
}

export default App;
