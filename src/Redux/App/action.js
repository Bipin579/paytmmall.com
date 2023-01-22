import {GET_CAROSELS_DATA_REQUEST, GET_CAROSELS_DATA_SUCCESS, GET_PRODUCT_DATA_FAILURE, GET_PRODUCT_DATA_REQUEST, GET_PRODUCT_DATA_SUCCESS } from "./actionTypes"
import axios from "axios"

export const getProductDataRequest = () => {
    return {type: GET_PRODUCT_DATA_REQUEST}
}

export const getProductDataSuccess = (payload) => {
    return {type: GET_PRODUCT_DATA_SUCCESS, payload}
}

export const getProductDataFailure = () => {
    return {type: GET_PRODUCT_DATA_FAILURE}
}

export const getCaroselsDataRequest = () => {
    return {type: GET_PRODUCT_DATA_REQUEST}
}

export const getCaroselsDataSuccess = (payload) => {
    return {type: GET_CAROSELS_DATA_SUCCESS, payload}
}

export const getCaroselsDataFailure = () => {
    return {type: GET_CAROSELS_DATA_REQUEST}
}

export const getProducts = (dispatch) => {
    dispatch(getProductDataRequest())
    axios.get(`https://paytmmallserver.onrender.com/product`).then((res) => {
        dispatch(getProductDataSuccess(res.data))
        // console.log(res.data);
    }).catch((err) => {
        dispatch(getProductDataFailure());
        console.log(err);
    })
}

export const getCarosels = (dispatch) => {
    dispatch(getCaroselsDataRequest())
    axios.get(`https://paytmmallserver.onrender.com/allcarosels`).then((res) => {
        dispatch(getCaroselsDataSuccess(res.data))
        // console.log(res.data);
    }).catch((err) => {
        dispatch(getCaroselsDataFailure());
        console.log(err);
    })
}






