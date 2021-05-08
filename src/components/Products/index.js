import React from 'react';

import "../Products/style.css";

const Products = (props) => {
    return (
        <div className="container">
            {
                props.products.map((product) => (
                    <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>$ {product.price}</p>
                        <button onClick={() => props.buyNow(product.id)} className="btn">Buy Now</button>
                    </div>
                ))}

        </div>
    );
};

export default Products;