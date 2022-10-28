import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import "./index.css";
import App from "./components/App";
import movies from "./reducers";

const store = configureStore({
  reducer: {
    movies,
  },
});

console.log("store:", store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App store={store} />);
