import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { cartReducers } from "./reducers/cartReducers";
import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducers,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

// redux dev tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
