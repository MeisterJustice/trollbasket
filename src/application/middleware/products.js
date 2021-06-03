import {
  loadProductsFailure,
  loadProductsSuccess,
  LOAD_PRODUCTS,
  loadProductFailure,
  loadProductSuccess,
  LOAD_PRODUCT,
  SEARCH_PRODUCTS_BY_NAME,
  SEARCH_PRODUCTS_BY_LOCATION,
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

    if (action.type === SEARCH_PRODUCTS_BY_NAME) {
      try {
        dispatch(uiActions.setLoading(true));
        const products = await api.products.searchByName(action.name);
        dispatch(loadProductsSuccess(products));
        dispatch(uiActions.setLoading(false));
      } catch (error) {
        dispatch(loadProductsFailure(error));
      }
    }

    if (action.type === SEARCH_PRODUCTS_BY_LOCATION) {
      try {
        dispatch(uiActions.setLoading(true));
        const products = await api.products.searchByLocation(action.location);
        dispatch(loadProductsSuccess(products));
        dispatch(uiActions.setLoading(false));
      } catch (error) {
        dispatch(loadProductsFailure(error));
      }
    }
  };

const loadProductFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === LOAD_PRODUCT) {
      try {
        dispatch(uiActions.setLoading(true));
        const product = await api.product.get(action.id);
        dispatch(loadProductSuccess(product));
        dispatch(uiActions.setLoading(false));
      } catch (error) {
        dispatch(loadProductFailure(error));
      }
    }
  };

export default [loadProductsFlow, loadProductFlow];
