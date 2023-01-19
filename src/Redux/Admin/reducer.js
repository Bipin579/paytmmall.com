import {
  DELETE_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_USERLIST_REQUEST,
  GET_USERLIST_SUCCESS,
  GET_USERLIST_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "./actionTypes";

const inisitalState = {
  isLoading: false,
  isError: false,
  products: [],
  isLoadingProductAdd: false,
  isErrorProductAdd: false,
  isLoadingProductDelete: false,
  isErrorProductDelete: false,
  isLoadingProductUpdate: false,
  isErrorProductUpdate: false,
  orders: [],
  admins: [],
  users: [],
  isLoadingUserList: false,
  isErrorUserList: false,
  isLoadingUserDelete: false,
  isErrorUserDelete: false,
};

const reducer = (state = inisitalState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case GET_PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case ADD_PRODUCT_REQUEST:
      return { ...state, isLoadingADD: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, isLoadingADD: false, products: [...state.products,payload] };
    case ADD_PRODUCT_FAILURE:
      return { ...state, isLoadingADD: false, isErrorADD: true };
    case DELETE_PRODUCT_REQUEST:
      return { ...state, isLoadingDelete: true };
    case DELETE_PRODUCT_SUCCESS:
      return { ...state, isLoadingDelete: false, products: payload };
    case DELETE_PRODUCT_FAILURE:
      return { ...state, isLoadingDelete: false, isErrorDelete: true };
    case GET_USERLIST_REQUEST:
      return { ...state, isLoadingUserList: true };
    case GET_USERLIST_SUCCESS:
      return { ...state, isLoadingUserList: false, users: payload };
    case GET_USERLIST_FAILURE:
      return { ...state, isLoadingUserList: false, isErrorUserList: true };
    case DELETE_USER_REQUEST:
      return { ...state, isLoadingUserDelete: true };
    case DELETE_USER_SUCCESS:
      return {...state,isLoadingUserDelete: false,users: state.users.filter((email) => email !== payload),
      };
    case DELETE_USER_FAILURE:
      return { ...state, isLoadingUserDelete: false, isErrorUserDelete: true };
    default:
      return state;
  }
};
export { reducer };
