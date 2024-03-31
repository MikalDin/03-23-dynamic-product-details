// About.js
import React, { useState, useEffect } from 'react';

function About() {
  const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);


      useEffect(() => {
      const fetchData = async () => {
      try {
        const response = await fetch('src/data/products.json');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
       const contentType = response.headers.get('content-type');
       if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Invalid RESPONSE, somehow its: NOT JSON'); 
                   }
            const data = await response.json();
            setProducts(Object.values(data.products));
                } catch (error) {
                    console.error('Error fetching products:', error)
                    setError(error.message);
                }
               
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>About Us</h2>
      <p>Welcome to our application! We are dedicated to providing..</p>
      {error ? (
        <p>Error: {error} </p>
      ) : (
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
  )}
  </div>
  );
}

export default About;
