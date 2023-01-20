import {
  GET_LOGIN_FAILURE,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  POST_SIGNIN_FAILURE,
  POST_SIGNIN_REQUEST,
  POST_SIGNIN_SUCCESS,
} from "./actionTypes";

const initialState = {
  users: [],
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_SIGNIN_REQUEST:
      return { ...state, isLoading: true };
    case POST_SIGNIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, isError: false };
    case POST_SIGNIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case GET_LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, isError: false , users: payload};
    case GET_LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
