import {
  loadProductsFailure,
  loadProductsSuccess,
  LOAD_PRODUCTS,
} from "../actions/products";
import * as uiActions from "../actions/ui";

const loadProductsFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === LOAD_PRODUCTS) {
      try {
        dispatch(uiActions.setLoading(true));
        const products = await api.products.getAll();
        dispatch(loadProductsSuccess(products));
        dispatch(uiActions.setLoading(false));
      } catch (error) {
        dispatch(loadProductsFailure(error));
      }
    }
  };

export default [loadProductsFlow];
