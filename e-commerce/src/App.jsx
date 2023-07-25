// import styles from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import { Home, ProductDetail } from "./pages";

// https://fakestoreapi.com/products/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
