import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from './data/products.json'; // Import the JSON data

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Object.values(productsData.products)); // Convert object values to an array
}, []);

return (
    <div>
        <h2>Product List</h2>
        <ul>
            {products.map((product, index) => (
                <li key={index}>
                    <Link to={`/product/${index + 1}`}>{product.name}</Link> {/* Adjust index */}
                </li>
            ))}
        </ul>
    </div>
);
}

export default ProductList;