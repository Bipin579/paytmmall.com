import { GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, POST_SIGNIN_FAILURE, POST_SIGNIN_REQUEST, POST_SIGNIN_SUCCESS } from "./actionTypes"
import axios from "axios";

// signup actions
export const signupRequestAction = () => {
    return { type: POST_SIGNIN_REQUEST };
}

export const signupSuccessAction = () => {
    return { type: POST_SIGNIN_SUCCESS };
}

export const signupFailureAction = () => {
    return { type: POST_SIGNIN_FAILURE };
}


//login actions

export const loginRequestAction = () => {
    return { type: GET_LOGIN_REQUEST };
}

export const loginSuccessAction = (payload) => {
    return { type: GET_LOGIN_SUCCESS, payload };
}

export const loginFailureAction = () => {
    return { type: GET_LOGIN_FAILURE };
}


// singup function

export const signup = (user) => (dispatch) => {
    dispatch(signupRequestAction());
    return axios.post(`https://paytmmallserver.onrender.com/users`, user).then((res) => {
        dispatch(signupSuccessAction());
    }).catch((err) => {
        dispatch(signupFailureAction());
    })
    
};

export const login = (dispatch) => {
    dispatch(loginRequestAction())
    axios.get(`https://paytmmallserver.onrender.com/users`).then((res) => {
        dispatch(loginSuccessAction(res.data));
    }).catch((err) => {
        dispatch(loginRequestAction());
    })
}


// const addCart = () => {
    
// }
