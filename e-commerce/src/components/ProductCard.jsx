import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="card p-4 m-1" style={{ width: "22rem" }}>
      <img
        className="card-img-top"
        src={product.image}
        alt="Card cap"
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{product.title}</h5>
        <p className="card-text">price: {product.price}</p>
        <p className="card-text">cat: {product.category}</p>
      </div>
    </div>
  );
}
