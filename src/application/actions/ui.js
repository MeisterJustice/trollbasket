export const PAGE_LOADED = "[ui] page loaded";
export const PRODUCT_LOADED = "[ui] product loaded";
export const SEARCH_PRODUCT_BY_NAME_LOADED =
  "[ui] product search by name loaded";
export const SEARCH_PRODUCT_BY_LOCATION_LOADED =
  "[ui] product search by location loaded";
export const CARTS_LOADED = "[ui] carts loaded";
export const CARTS_UPDATED = "[ui] carts updated";
export const CART_ADDED = "[ui] cart added";
export const CART_DELETED = "[ui] carts deleted";
export const SET_LOADING_ON = "[ui] set loading on";
export const SET_LOADING_OFF = "[ui] set loading off";

export const pageLoaded = {
  type: PAGE_LOADED,
};

export const searchProductByNameLoaded = (name) => ({
  type: SEARCH_PRODUCT_BY_NAME_LOADED,
  name,
});

export const searchProductByLocationLoaded = (location) => ({
  type: SEARCH_PRODUCT_BY_LOCATION_LOADED,
  location,
});

export const productLoaded = (id) => ({
  type: PRODUCT_LOADED,
  id,
});

export const cartsLoaded = {
  type: CARTS_LOADED,
};

export const cartUpdated = (id, action) => ({
  type: CARTS_UPDATED,
  id,
  action,
});

export const cartDeleted = (id) => ({
  type: CART_DELETED,
  id,
});

export const cartAdded = (product) => ({
  type: CART_ADDED,
  product,
});

export const setLoading = (isLoading) => ({
  type: isLoading ? SET_LOADING_ON : SET_LOADING_OFF,
  payload: isLoading,
});
