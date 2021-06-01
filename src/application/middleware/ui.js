import { PAGE_LOADED } from "../actions/ui";
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

export default [pageLoadedFlow];
