import {
  loadCartsFailure,
  loadCartsSuccess,
  LOAD_CARTS,
  UPDATE_CART,
  ADD_CART,
  setCarts,
  setCartsDelete,
  DELETE_CART,
} from "../actions/carts";
import * as uiActions from "../actions/ui";

const loadCartsFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === LOAD_CARTS) {
      try {
        dispatch(uiActions.setLoading(true));
        // const carts = await api.carts.getAll();
        const cartItems = await localStorage.getItem("rensource_cart");
        const carts = JSON.parse(cartItems);
        dispatch(loadCartsSuccess(carts));
        dispatch(uiActions.setLoading(false));
      } catch (error) {
        dispatch(loadCartsFailure(error));
      }
    }
  };

const updateCartFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === UPDATE_CART) {
      try {
        dispatch(uiActions.setLoading(true));
        const cart = await api.carts.update(action.id, action.action);
        localStorage.setItem("rensource_cart", JSON.stringify(cart));

        dispatch(setCarts(cart));
        dispatch(uiActions.setLoading(false));
      } catch (error) {
        dispatch(loadCartsFailure(error));
      }
    }
  };

const deleteCartFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === DELETE_CART) {
      try {
        dispatch(uiActions.setLoading(true));
        const cart = await api.carts.delete(action.id);
        localStorage.setItem("rensource_cart", JSON.stringify(cart));

        dispatch(setCartsDelete(cart));
        dispatch(uiActions.setLoading(false));
      } catch (error) {
        dispatch(loadCartsFailure(error));
      }
    }
  };

const addCartFlow =
  ({ api }) =>
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === ADD_CART) {
      try {
        dispatch(uiActions.setLoading(true));
        const cart = await api.carts.post(action.product);
        localStorage.setItem("rensource_cart", JSON.stringify(cart));

        dispatch(setCarts(cart));
        dispatch(uiActions.setLoading(false));
      } catch (error) {
        dispatch(loadCartsFailure(error));
      }
    }
  };

export default [loadCartsFlow, addCartFlow, updateCartFlow, deleteCartFlow];
