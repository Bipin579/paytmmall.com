import {
  DELETE_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  GET_USERLIST_REQUEST,
  GET_USERLIST_SUCCESS,
  GET_USERLIST_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  ADD_ADMIN_REQUEST,
  ADD_ADMIN_SUCCESS,
  ADD_ADMIN_FAILURE,
  GET_ADMINLIST_REQUEST,
  GET_ADMINLIST_SUCCESS,
  GET_ADMINLIST_FAILURE,
  DELETE_ADMIN_REQUEST,
  DELETE_ADMIN_SUCCESS,
  DELETE_ADMIN_FAILURE,
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
  users: [],
  isLoadingUserList: false,
  isErrorUserList: false,
  isLoadingUserDelete: false,
  isErrorUserDelete: false,
  admins: [],
  isLoadingAdminList: false,
  isErrorAdminList: false,
  isLoadingAdminAdd: false,
  isErrorAdminAdd: false,
};

const reducer = (state = inisitalState, { type, payload }) => {
  switch (type) {
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
      return {...state,isLoadingUserDelete: false,users:state.users.filter((user) => user.id !== payload)
      };
    case DELETE_USER_FAILURE:
      return { ...state, isLoadingUserDelete: false, isErrorUserDelete: true };
    case ADD_ADMIN_REQUEST:
      return { ...state, isLoadingAdminAdd: true };
    case ADD_ADMIN_SUCCESS:
      return { ...state, isLoadingAdminAdd: false, products: [...state.admins,payload] };
    case ADD_ADMIN_FAILURE:
      return { ...state, isLoadingAdminAdd: false, isErrorAdminAdd: true }; 
    case GET_ADMINLIST_REQUEST:
      return { ...state, isLoadingAdminList: true };
    case GET_ADMINLIST_SUCCESS:
      return { ...state, isLoadingAdminList: false, admins: payload };
    case GET_ADMINLIST_FAILURE:
      return { ...state, isLoadingAdminList: false, isErrorAdminList: true };  
    case DELETE_ADMIN_REQUEST:
      return { ...state, isLoadingAdminDelete: true };
    case DELETE_ADMIN_SUCCESS:
      return {...state,isLoadingAdminDelete: false,admins:state.admins.filter((admin) => admin.id !== payload)
      };
    case DELETE_ADMIN_FAILURE:
      return { ...state, isLoadingAdminDelete: false, isErrorAdminDelete: true };
    default:
      return state;
  }
};
export { reducer };
