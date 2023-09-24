import React from "react";

function Product({ name, price, description }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div>
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
}

export default ProductList;
