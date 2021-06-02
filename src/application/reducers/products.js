import {
  LOAD_PRODUCTS_SUCCESS,
  SET_PRODUCTS,
  LOAD_PRODUCT_SUCCESS,
} from "../actions/products";

const initialState = {
  allProducts: [],
  product: {},
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return { allProducts: action.payload, error: null, product: {} };
    case LOAD_PRODUCT_SUCCESS:
      return { ...state, product: action.payload };
    case SET_PRODUCTS:
      return { allProducts: action.payload, error: null, product: {} };
    default:
      return state;
  }
};

export default reducer;
