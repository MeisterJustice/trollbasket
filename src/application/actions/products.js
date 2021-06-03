export const LOAD_PRODUCTS = "[products] load";
export const LOAD_PRODUCTS_SUCCESS = "[products] load success";
export const LOAD_PRODUCTS_FAILURE = "[products] load failure";
export const SEARCH_PRODUCTS_BY_NAME = "[products] search by name";
export const SEARCH_PRODUCTS_BY_LOCATION = "[products] search by location";
export const LOAD_PRODUCT = "[product] load";
export const LOAD_PRODUCT_SUCCESS = "[product] load success";
export const LOAD_PRODUCT_FAILURE = "[product] load failure";
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

export const searchProductsByName = (name) => ({
  type: SEARCH_PRODUCTS_BY_NAME,
  name,
});

export const searchProductsByLocation = (location) => ({
  type: SEARCH_PRODUCTS_BY_LOCATION,
  location,
});

export const loadProduct = (id) => ({
  type: LOAD_PRODUCT,
  id,
});

export const loadProductSuccess = (product) => ({
  type: LOAD_PRODUCT_SUCCESS,
  payload: product,
});

export const loadProductFailure = (error) => ({
  type: LOAD_PRODUCT_FAILURE,
  payload: error,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
