import React, { Suspense } from "react";
import { fetchProduct, handlePromise } from "../utils";

function Categories({ readCategories }) {
  const categories = readCategories.read();
  console.log(categories);
  return (
    <>
      {categories.map((cat) => (
        <button className="btn btn-outline-dark btn-sm py-2 m-2">{cat}</button>
      ))}
    </>
  );
}

export default function ProductList() {
  const readCategories = handlePromise(
    fetchProduct("https://fakestoreapi.com/products/categories")
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <h1 className="text-center">Ecommerce Mapsa Products</h1>
            <hr />
          </div>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center">
            <Suspense fallback={<>LOADING...</>}>
              <Categories readCategories={readCategories} />
            </Suspense>

        </div>
      </div>
    </>
  );
}
