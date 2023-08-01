import React, { Suspense, useState } from "react";
import { fetchProduct, handlePromise } from "../utils";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProductCard from "./ProductCard";

function Categories({ readCategories, filter, toggleCategoryHandler }) {
  const categories = readCategories.read();
  console.log(categories);
  return (
    <>
      {categories.map((cat) => (
        <button
          onClick={() => toggleCategoryHandler(cat)}
          className={`btn btn-outline-dark btn-sm my-2 ${
            filter === cat ? "btn-primary" : "btn-secondary"
          }`}
        >
          {cat}
        </button>
      ))}
    </>
  );
}

function ShowProducts({ readProducts, filter }) {
  const products = readProducts.read();
  if (filter) {
  }
  const content = () =>
    products
      .filter((product) => (filter ? product.category === filter : true))
      .map((product) => <ProductCard key={product.id} product={product} />);
  return <>{content()} </>;
}

function CategoryLoading() {
  return (
    <>
      <SkeletonTheme baseColor="#0000" highlightColor="#444">
        <p>
          <Skeleton count={3} />
        </p>
      </SkeletonTheme>
    </>
  );
}

export default function ProductList() {
  const [search, setSearch] = useState(null);
  const [filter, setFilter] = useState(null);

  const readCategories = handlePromise(
    fetchProduct("https://fakestoreapi.com/products/categories")
  );
  const readProducts = handlePromise(
    fetchProduct("https://fakestoreapi.com/products")
  );
  const toggleCategoryHandler = (catName) => {
    if (catName === filter) {
      setFilter(null);
    } else {
      setFilter(catName);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <h1 className="text-center">Ecommerce Mapsa Products</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <Suspense fallback={<>LOADING ...</>}>
            <div className="col-11 d-flex flex-row flex-wrap">
              <ShowProducts readProducts={readProducts} filter={filter} />
            </div>
            <div className="col-1 d-flex flex-column p-2 ">
              <Categories
                readCategories={readCategories}
                filter={filter}
                toggleCategoryHandler={toggleCategoryHandler}
              />
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
}
