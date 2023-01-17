import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./actionTypes";
import axios from "axios";

const getProductRequest = () => ({ type: GET_PRODUCT_REQUEST });
const getProductSuccess = (payload) => ({ type: GET_PRODUCT_SUCCESS, payload });
const getProductFailure = () => ({ type: GET_PRODUCT_FAILURE });
const addProductRequest = () => ({ type: ADD_PRODUCT_REQUEST });
const addProductSuccess = (payload) => ({ type: ADD_PRODUCT_SUCCESS, payload });
const addProductFailure = () => ({ type: ADD_PRODUCT_FAILURE });
const deleteProductRequest = () => ({ type: DELETE_PRODUCT_REQUEST });
const deleteProductSuccess = (payload) => ({ type: DELETE_PRODUCT_SUCCESS, payload });
const deleteProductFailure = () => ({ type: DELETE_PRODUCT_FAILURE });
const updateProductRequest = () => ({ type: UPDATE_PRODUCT_REQUEST });
const updateProductSuccess = (payload) => ({ type: UPDATE_PRODUCT_SUCCESS, payload });
const updateProductFailure = () => ({ type: UPDATE_PRODUCT_FAILURE });

export const getProducts = async (dispatch) => {
    dispatch(getProductRequest());
    try {
        const { data } = await axios.get(`https://paytmmallserver.onrender.com/api/product`);
        dispatch(getProductSuccess(data));
    } catch (error) {
        dispatch(getProductFailure());
    }
}

export const addProduct = (product) => async (dispatch) => {
    dispatch(addProductRequest());
    try {
        const { data } = await axios.post("/api/products", product);
        dispatch(addProductSuccess(data));
    } catch (error) {
        dispatch(addProductFailure(error));
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    dispatch(deleteProductRequest());
    try {
        const { data } = await axios.delete(`/api/products/${id}`);
        dispatch(deleteProductSuccess(data));
    } catch (error) {
        dispatch(deleteProductFailure(error));
    }
}

export const updateProduct = (product) => async (dispatch) => {
    dispatch(updateProductRequest());
    try {
        const { data } = await axios.put(`/api/products/${product.id}`, product);
        dispatch(updateProductSuccess(data));
    } catch (error) {
        dispatch(updateProductFailure(error));
    }    
}