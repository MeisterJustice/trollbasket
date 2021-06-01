export const LOAD_PRODUCTS = "[products] load";
export const LOAD_PRODUCTS_SUCCESS = "[products] load success";
export const LOAD_PRODUCTS_FAILURE = "[products] load failure";
export const SET_PRODUCTS = "[products] set";

export const loadProducts = {
  type: LOAD_PRODUCTS,
};

export const loadProductsSuccess = (products) => ({
  type: LOAD_PRODUCTS_SUCCESS,
  payload: products,
});

export const loadProductsFailure = (error) => ({
  type: LOAD_PRODUCTS_FAILURE,
  payload: error,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});