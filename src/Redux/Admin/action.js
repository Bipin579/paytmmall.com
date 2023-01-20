import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_ADMIN_FAILURE, DELETE_ADMIN_REQUEST, DELETE_ADMIN_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_USER_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_ADMINLIST_FAILURE, GET_ADMINLIST_REQUEST, GET_ADMINLIST_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_USERLIST_FAILURE, GET_USERLIST_REQUEST, GET_USERLIST_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./actionTypes";
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
const getUserListRequest = () => ({ type: GET_USERLIST_REQUEST });
const getUserListSuccess = (payload) => ({ type: GET_USERLIST_SUCCESS, payload });
const getUserListFailure = () => ({ type: GET_USERLIST_FAILURE });
const deleteUserRequest = () => ({ type: DELETE_USER_REQUEST });
const deleteUserSuccess = (payload) => ({ type: DELETE_USER_SUCCESS, payload });
const deleteUserFailure = () => ({ type: DELETE_USER_FAILURE });
const getAdminListRequest = () => ({ type: GET_ADMINLIST_REQUEST });
const getAdminListSuccess = (payload) => ({ type: GET_ADMINLIST_SUCCESS, payload });
const getAdminListFailure = () => ({ type: GET_ADMINLIST_FAILURE});
const addAdminRequest = () => ({ type: ADD_PRODUCT_REQUEST });
const addAdminSuccess = (payload) => ({ type: ADD_PRODUCT_SUCCESS, payload });
const addAdminFailure = () => ({ type: ADD_PRODUCT_FAILURE });
const deleteAdminRequest = () => ({ type: DELETE_ADMIN_REQUEST });
const deleteAdminSuccess = (payload) => ({ type: DELETE_ADMIN_SUCCESS, payload });
const deleteAdminFailure = () => ({ type: DELETE_ADMIN_FAILURE });

export const getProducts = async (dispatch) => {
    dispatch(getProductRequest());
    try {
        const { data } = await axios.get(`https://paytmmallserver.onrender.com/product`);
        dispatch(getProductSuccess(data));
    } catch (error) {
        dispatch(getProductFailure());
    }
}

export const addProduct = (product) => async (dispatch) => {
    dispatch(addProductRequest());
    try {
        const { data } = await axios.post("https://paytmmallserver.onrender.com/product", product);
        dispatch(addProductSuccess(data));
        return data;
    } catch (error) {
        dispatch(addProductFailure(error));
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    dispatch(deleteProductRequest());
    try {
        const { data } = await axios.delete(`https://paytmmallserver.onrender.com/product/${id}`);
        dispatch(deleteProductSuccess(data));
    } catch (error) {
        dispatch(deleteProductFailure(error));
    }
}

export const updateProduct = (id,product) => async (dispatch) => {
    dispatch(updateProductRequest());
    try {
        const { data } = await axios.put(`https://paytmmallserver.onrender.com/product/${id}`, product);
        dispatch(updateProductSuccess(data));
    } catch (error) {
        dispatch(updateProductFailure(error));
    }    
}

export const getUsersList=async(dispatch)=>{
    dispatch(getUserListRequest());
    try {
        const { data } = await axios.get("https://mock-data-zsk0.onrender.com/users");
        dispatch(getUserListSuccess(data));
    } catch (error) {
        dispatch(getUserListFailure(error));
    }
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch(deleteUserRequest());
    try {
        let res=await axios.delete(`https://mock-data-zsk0.onrender.com/users/${id}`);
        dispatch(deleteUserSuccess(id));
        return res;
    } catch (error) {
        dispatch(deleteUserFailure('error',error));
    }
}

export const getAdminList=async(dispatch) =>{
        dispatch(getAdminListRequest());
        try {
            const { data } = await axios.get("https://mock-data-zsk0.onrender.com/admins");
            console.log(data);
            dispatch(getAdminListSuccess(data));
        } catch (error) {
            dispatch(getAdminListFailure(error));
        }
}
export const addAdmin=(admin)=>async(dispatch)=>{
    console.log(admin);
    dispatch(addAdminRequest());
    try {
        let {data}= await axios.post('https://mock-data-zsk0.onrender.com/admins',admin)
      console.log('data ', data)
        dispatch(addAdminSuccess(data));
        return data;
    } catch (error) {
        dispatch(addAdminFailure(error))
    }
}

export const deleteAdmin=(id)=>async(dispatch)=>{
    dispatch(deleteAdminRequest());
    try {
        let {data}= await axios.delete(`https://mock-data-zsk0.onrender.com/admins/${id}`)
        dispatch(deleteAdminSuccess(id));
        return data;
    } catch (error) {
        dispatch(deleteAdminFailure(error))
    }
}

 