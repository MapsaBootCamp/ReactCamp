import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductList />
      <Footer />
    </>
  );
}
