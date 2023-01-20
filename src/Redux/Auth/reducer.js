import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  POST_SIGNIN_FAILURE,
  POST_SIGNIN_REQUEST,
  POST_SIGNIN_SUCCESS,
  SET_LOGIN_REQUEST,
  SET_LOGOUT_REQUEST,
} from "./actionTypes";


const initialState = {
  users: [],
  isAuth: localStorage.getItem("isAuth") || false,
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
      return { ...state, isAuth:true};
    case SET_LOGOUT_REQUEST:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
