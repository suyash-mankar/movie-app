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
// console.log("BEFORE STATE:", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "superman" }],
// });

// console.log("AFTER STATE:", store.getState());


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App store={store} />);
