import { PAGE_LOADED, PRODUCT_LOADED } from "../actions/ui";
import * as ProductsActions from "../actions/products";

const pageLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === PAGE_LOADED) {
      log("page loaded");
      dispatch(ProductsActions.loadProducts);
    }
  };

const productLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === PRODUCT_LOADED) {
      log("product loaded");
      dispatch(ProductsActions.loadProduct(action.id));
    }
  };

export default [pageLoadedFlow, productLoadedFlow];
