import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_USERLIST_FAILURE,
  GET_USERLIST_REQUEST,
  GET_USERLIST_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "./actionTypes";
import axios from "axios";

const getProductRequest = () => ({ type: GET_PRODUCT_REQUEST });
const getProductSuccess = (payload) => ({ type: GET_PRODUCT_SUCCESS, payload });
const getProductFailure = () => ({ type: GET_PRODUCT_FAILURE });
const addProductRequest = () => ({ type: ADD_PRODUCT_REQUEST });
const addProductSuccess = (payload) => ({ type: ADD_PRODUCT_SUCCESS, payload });
const addProductFailure = () => ({ type: ADD_PRODUCT_FAILURE });
const deleteProductRequest = () => ({ type: DELETE_PRODUCT_REQUEST });
const deleteProductSuccess = (payload) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload,
});
const deleteProductFailure = () => ({ type: DELETE_PRODUCT_FAILURE });
const updateProductRequest = () => ({ type: UPDATE_PRODUCT_REQUEST });
const updateProductSuccess = (payload) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload,
});
const updateProductFailure = () => ({ type: UPDATE_PRODUCT_FAILURE });
const getUserListRequest = () => ({ type: GET_USERLIST_REQUEST });
const getUserListSuccess = (payload) => ({
  type: GET_USERLIST_SUCCESS,
  payload,
});
const getUserListFailure = () => ({ type: GET_USERLIST_FAILURE });
const deleteUserRequest = () => ({ type: DELETE_USER_REQUEST });
const deleteUserSuccess = (payload) => ({ type: DELETE_USER_SUCCESS, payload });
const deleteUserFailure = () => ({ type: DELETE_USER_FAILURE });

export const getProducts = async (dispatch) => {
  dispatch(getProductRequest());
  try {
    const { data } = await axios.get(
      `https://paytmmallserver.onrender.com/product`
    );
    dispatch(getProductSuccess(data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};

export const addProduct = (product) => async (dispatch) => {
  dispatch(addProductRequest());
  try {
    const { data } = await axios.post(
      "https://paytmmallserver.onrender.com/product",
      product
    );
    console.error(" data", data);
    dispatch(addProductSuccess(data));
  } catch (error) {
    dispatch(addProductFailure(error));
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch(deleteProductRequest());
  try {
    const { data } = await axios.delete(
      `https://paytmmallserver.onrender.com/product/${id}`
    );
    dispatch(deleteProductSuccess(data));
  } catch (error) {
    dispatch(deleteProductFailure(error));
  }
};

export const updateProduct = (id, product) => async (dispatch) => {
  dispatch(updateProductRequest());
  try {
    const { data } = await axios.put(
      `https://paytmmallserver.onrender.com/product/${id}`,
      product
    );
    dispatch(updateProductSuccess(data));
  } catch (error) {
    dispatch(updateProductFailure(error));
  }
};

export const getUsersList = async (dispatch) => {
  dispatch(getUserListRequest());
  try {
    const { data } = await axios.get(
      "https://paytmmallserver.onrender.com/users"
    );
    dispatch(getUserListSuccess(data));
  } catch (error) {
    console.log("error", error);
    dispatch(getUserListFailure(error));
  }
};

export const addUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://paytmmallserver.onrender.com/users",
      user
    );
    console.log(data);
    // dispatch()
  } catch (error) {
    // dispatch()
    console.log("error", error);
  }
};

export const deleteUser = (email) => async (dispatch) => {
  dispatch(deleteUserRequest());
  try {
    const { data } = await axios.delete(
      `https://paytmmallserver.onrender.com/users?email=${email}`
    );
    console.log("data", data);
    dispatch(deleteUserSuccess(data.email));
  } catch (error) {
    dispatch(deleteUserFailure("error", error));
  }
};
