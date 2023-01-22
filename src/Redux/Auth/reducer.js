import {
  ADD_CART_FAILURE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  POST_SIGNIN_FAILURE,
  POST_SIGNIN_REQUEST,
  POST_SIGNIN_SUCCESS,
  SET_LOGIN_REQUEST,
  SET_LOGOUT_REQUEST,
} from "./actionTypes";

let key = JSON.parse(localStorage.getItem("isAuth"));
const initialState = {
  users: [],
  isAuth: key || false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_SIGNIN_REQUEST:
      return { ...state, isLoading: true };
    case POST_SIGNIN_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case POST_SIGNIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_USER_REQUEST:
      return { ...state, isLoading: true };
    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, isError: false, users: payload };
    case GET_USER_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case SET_LOGIN_REQUEST:
      return { ...state, isAuth: true };
    case SET_LOGOUT_REQUEST:
      return { ...state, isAuth: false };
    case ADD_CART_REQUEST:
      return { ...state, isLoading: true };
    case ADD_CART_SUCCESS:
      return { ...state, isLoading: false };
    case ADD_CART_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
