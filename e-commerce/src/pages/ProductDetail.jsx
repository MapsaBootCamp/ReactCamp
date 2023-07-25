import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function ProductShow({ product }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">price: {product.price}</p>
        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      // await sleep(2000);
      console.log(response);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    }
    getData();
  }, [id]);
  return (
    <div className="container">
      {isLoading ? <Loading /> : <ProductShow product={data} />}
    </div>
  );
}

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
