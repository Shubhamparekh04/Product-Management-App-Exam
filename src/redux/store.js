import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./reducers/productReducer";

const rootReducer = combineReducers({
  products: productReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));