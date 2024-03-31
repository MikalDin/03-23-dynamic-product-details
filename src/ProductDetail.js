import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from './data/products.json';


function ProductDetail() {
        const { productId } = useParams();
        const [product, setProduct] = useState(null);


        useEffect(() => {

            const fetchedProduct = productsData.products[productId];
             setProduct(fetchedProduct);
        }, [productId]);

        return (
            <div>
                {product && (
                    <>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price:{product.price}</p>
                      </>
                )}
            </div>
        );
}
export default ProductDetail;