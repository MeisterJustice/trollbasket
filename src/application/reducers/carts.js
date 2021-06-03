import {
  LOAD_CARTS_SUCCESS,
  SET_CARTS,
  SET_CARTS_DELETE,
} from "../actions/carts";

const initialState = {
  allCarts: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARTS_SUCCESS:
      return { allCarts: action.payload, error: null };
    case SET_CARTS:
      return { allCarts: action.payload, error: null };
    case SET_CARTS_DELETE:
      return { allCarts: action.payload, error: null };
    default:
      return state;
  }
};

export default reducer;
