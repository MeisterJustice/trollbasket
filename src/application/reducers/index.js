import { combineReducers } from "redux";
import ui from "./ui";
import products from "./products";
import carts from "./carts";

export default combineReducers({
  ui,
  products,
  carts,
});
