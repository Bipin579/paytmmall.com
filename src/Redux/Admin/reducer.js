import React from 'react'
import { DELETE_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE } from './actionTypes'

const inisitalState={isLoading:false,isError:false,products:[],isLoadingAdd:false,isLoadingDelete:false,isErrorAdd:false,isErrorDelete:false,isLoadingUpdate:false,isErrorUpdate:false,orders:[],admins:[],}

const reducer = (state=inisitalState,{type,payload}) => {
  switch(type) {
    case GET_PRODUCT_REQUEST:
        return {...state,isLoading:true}
    case GET_PRODUCT_SUCCESS:
        return {...state,isLoading:false,products:payload} 
    case GET_PRODUCT_FAILURE:
        return {...state,isLoading:false,isError:true}
    case ADD_PRODUCT_REQUEST:
        return {...state,isLoadingADD:true}
    case ADD_PRODUCT_SUCCESS:
        return {...state,isLoadingADD:false,products:payload} 
    case ADD_PRODUCT_FAILURE:
        return {...state,isLoadingADD:false,isErrorADD:true}
    case DELETE_PRODUCT_REQUEST:
        return {...state,isLoadingDelete:true}
    case DELETE_PRODUCT_SUCCESS:
        return {...state,isLoadingDelete:false,products:payload} 
    case DELETE_PRODUCT_FAILURE:
        return {...state,isLoadingDelete:false,isErrorDelete:true}              
    default:
        return state;         
  }
}
export {reducer};