import React, { useEffect, useState, Suspense, useCallback } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

// function use(promise){
// if (promise.status === 'fulfilled') {
//     return promise.value;
//   } else if (promise.status === 'rejected') {
//     throw promise.reason;
//   } else if (promise.status === 'pending') {
//     throw promise;
//   } else {
//     promise.status = 'pending';
//     promise.then(
//       result => {
//         promise.status = 'fulfilled';
//         promise.value = result;
//       },
//       reason => {
//         promise.status = 'rejected';
//         promise.reason = reason;
//       },
//     );
//     throw promise;
//   }}

// function ProductShow({ productId }) {

//   const fetcher = fetch(`https://fakestoreapi.com/products/${productId}`).then(res => res.json()).then(result => ({
//         status: "fulfilled", value: result})).catch(error => ({status : "rejected", value : error}))
//   if (fetcher.status === "fulfilled") {
//     return ((<div className="card" style={{ width: "18rem" }}>
//       <img src={fetcher.value.image} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{fetcher.value.title}</h5>
//         <p className="card-text">{fetcher.value.description}</p>
//         <p className="card-text">price: {fetcher.value.price}</p>
//         <button className="btn btn-primary">Go somewhere</button>
//       </div>
//     </div>));
// } else if (fetcher.status === "rejected") {
//   throw fetcher.value; // Echo the failed Fetch() promise to React
// } else if (fetcher.status === "fulfilled") {
//   return ; // Echo fulfilled promise to React
// }else {
//   fetcher.status = 'pending'

// }
//   throw fetcher
// }

function handlePromise(promise) {
  let status = "pending";
  let fetching = promise.then(
    (result) => {
      status = "fulfilled";
      fetching = result;
    },
    (reason) => {
      status = "rejected";
      fetching = reason;
    }
  );
  return {
    read() {
      if (status === "fulfilled") {
        return fetching;
      } else if (status === "rejected") {
        throw fetching;
      } else {
        throw fetching;
      }
    },
  };
}

async function fetchProduct(url) {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

function ProductShow({ readProduct }) {
  const data = readProduct.read();
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={data.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>
        <p className="card-text">price: {data.price}</p>
        <button className="btn btn-primary">Go somewhere</button>
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const readProduct = handlePromise(
    fetchProduct(`https://fakestoreapi.com/products/${id}`)
  );

  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState(null);

  return (
    <div className="container">
      {/* {isLoading ? <Loading /> : <ProductShow product={data} />} */}
      <Suspense fallback={<Loading />}>
        <ProductShow readProduct={readProduct} x={x} />
      </Suspense>
    </div>
  );
}

// const sleep = (ms) =>
//   new Promise((resolve) => {
//     setTimeout(() => resolve(), ms);
//   });
