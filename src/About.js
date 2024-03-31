// About.js
import React, { useState, useEffect } from 'react';
import productsData from './data/products.json'

function About() {
 const products = Object.values(productsData.products);


  return (
    <div>
      <h2>About Us</h2>
      <p>Welcome to our application! We are dedicated to providing..</p>
     <div>
      <h3>Featured Products:</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>

  </div>
  );
}

export default About;
