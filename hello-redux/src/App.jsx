import React, { useState } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { Home, Counter } from "./pages";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Provider store={store}>
          <button
            className="btn btn-primary"
            onClick={() =>
              setTheme((theme) => (theme === "dark" ? "light" : "dark"))
            }
          >
            {theme}
          </button>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Home />} />
            <Route
              path="/counter"
              element={
                <>
                  <Counter>
                    <h1>SALAM</h1>
                  </Counter>
                </>
              }
            />
          </Routes>
        </Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
