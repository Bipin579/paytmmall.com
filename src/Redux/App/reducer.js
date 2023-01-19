import {
  GET_CAROSELS_DATA_FAILURE,
  GET_CAROSELS_DATA_REQUEST,
  GET_CAROSELS_DATA_SUCCESS,
  GET_PRODUCT_DATA_FAILURE,
  GET_PRODUCT_DATA_REQUEST,
  GET_PRODUCT_DATA_SUCCESS,
} from "./actionTypes";

const initialState = {
  allcarosels: {},
  product: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_DATA_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCT_DATA_SUCCESS:
      return { ...state, isLoading: false, product: payload, isError: false };
    case GET_PRODUCT_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_CAROSELS_DATA_REQUEST:
      return { ...state, isLoading: true };
    case GET_CAROSELS_DATA_SUCCESS:
      return { ...state, isLoading: false, allcarosel: payload, isError: false };
    case GET_CAROSELS_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
