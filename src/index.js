import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import "./index.css";
import App from "./components/App";
import { movies, search } from "./reducers";

// function logger(obj, next, action)
// logger(obj)(next)(action) - internally redux will be doing this
// const logger = function({dispatch, getState}) {
//   return function(next) {
//     return function (action){
//       // middleware code
//       console.log('ACTION_TYPE = ', action.type);
//       next(action);
//     }
//   }
// }

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    //logger code
    if(typeof action !== 'function'){
      console.log("ACTION_TYPE = ", action.type);
    }
    next(action);   
  };


// const thunk = 
// ({ dispatch, getState }) =>
// (next) =>
// (action) => {
//   if(typeof(action)=='function'){
//     action(dispatch)
//     return;
//   }
//   next(action);
// };

  const store = configureStore({
  reducer: {
    movies,
    search,
  },
  middleware: [logger, thunk],
});

console.log("store:", store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App store={store} />);
