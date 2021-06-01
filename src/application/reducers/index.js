import { combineReducers } from "redux";
import ui from "./ui";
import products from "./products";

export default combineReducers({
  ui,
  products,
});
