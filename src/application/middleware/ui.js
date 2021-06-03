import {
  PAGE_LOADED,
  PRODUCT_LOADED,
  CARTS_LOADED,
  CART_DELETED,
  CARTS_UPDATED,
  CART_ADDED,
  SEARCH_PRODUCT_BY_NAME_LOADED,
  SEARCH_PRODUCT_BY_LOCATION_LOADED,
} from "../actions/ui";
import * as ProductsActions from "../actions/products";
import * as CartsActions from "../actions/carts";

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

const searchProductByNameLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === SEARCH_PRODUCT_BY_NAME_LOADED) {
      log("product searched by name");
      dispatch(ProductsActions.searchProductsByName(action.name));
    }
  };

const searchProductByLocationLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === SEARCH_PRODUCT_BY_LOCATION_LOADED) {
      log("product searched by location");
      dispatch(ProductsActions.searchProductsByLocation(action.location));
    }
  };

const cartLoadedFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === CARTS_LOADED) {
      log("carts loaded");
      dispatch(CartsActions.loadCarts);
    }
  };

const updateCartFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === CARTS_UPDATED) {
      log("cart updated");
      dispatch(CartsActions.updateCart(action.id, action.action));
    }
  };

const deleteCartFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);
    if (action.type === CART_DELETED) {
      log("cart deleted");
      dispatch(CartsActions.deleteCart(action.id));
    }
  };

const addCartFlow =
  ({ log }) =>
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === CART_ADDED) {
      log("cart added");
      dispatch(CartsActions.addCart(action.product));
    }
  };

export default [
  pageLoadedFlow,
  productLoadedFlow,
  cartLoadedFlow,
  updateCartFlow,
  deleteCartFlow,
  addCartFlow,
  searchProductByLocationLoadedFlow,
  searchProductByNameLoadedFlow,
];
