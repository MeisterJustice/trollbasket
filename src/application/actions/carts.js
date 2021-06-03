export const LOAD_CARTS = "[carts] load";
export const LOAD_CARTS_SUCCESS = "[carts] load success";
export const LOAD_CARTS_FAILURE = "[carts] load failure";
export const SET_CARTS = "[carts] set";
export const ADD_CART = "[carts] add";
export const SET_CARTS_DELETE = "[carts] delete";
export const UPDATE_CART = "[cart] update";
export const DELETE_CART = "[cart] delete";

export const loadCarts = {
  type: LOAD_CARTS,
};

export const loadCartsSuccess = (carts) => ({
  type: LOAD_CARTS_SUCCESS,
  payload: carts,
});

export const loadCartsFailure = (error) => ({
  type: LOAD_CARTS_FAILURE,
  payload: error,
});

export const updateCart = (id, action) => ({
  type: UPDATE_CART,
  id,
  action,
});

export const deleteCart = (id) => ({
  type: DELETE_CART,
  id,
});

export const setCarts = (carts) => ({
  type: SET_CARTS,
  payload: carts,
});

export const addCart = (product) => ({
  type: ADD_CART,
  product,
});

export const setCartsDelete = (carts) => ({
  type: SET_CARTS_DELETE,
  payload: carts,
});
