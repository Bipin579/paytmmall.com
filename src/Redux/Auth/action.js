import {
  ADD_CART_FAILURE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  DELETE_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  POST_SIGNIN_FAILURE,
  POST_SIGNIN_REQUEST,
  POST_SIGNIN_SUCCESS,
  SET_LOGIN_REQUEST,
  SET_LOGOUT_REQUEST,
} from "./actionTypes";
import axios from "axios";

// signup actions
export const signupRequestAction = () => {
  return { type: POST_SIGNIN_REQUEST };
};

export const signupSuccessAction = () => {
  return { type: POST_SIGNIN_SUCCESS };
};

export const signupFailureAction = () => {
  return { type: POST_SIGNIN_FAILURE };
};

//login actions

export const userRequestAction = () => {
  return { type: GET_USER_REQUEST };
};

export const userSuccessAction = (payload) => {
  return { type: GET_USER_SUCCESS, payload };
};

export const userFailureAction = () => {
  return { type: GET_USER_FAILURE };
};

export const setLoginAction = () => {
  return { type: SET_LOGIN_REQUEST };
};

export const setLogoutAction = () => {
  return { type: SET_LOGOUT_REQUEST };
};

// Add cart actions
export const addRequestAction = () => {
  return {type: ADD_CART_REQUEST}
}
export const addSuccessAction = () => {
  return {type: ADD_CART_SUCCESS}
}
export const addFailureAction = () => {
  return {type: ADD_CART_FAILURE}
}

// delete cart actions

export const deleteRequestAction = () => {
  return {type: DELETE_CART_REQUEST}
}
export const deleteSuccessAction = () => {
  return {type: DELETE_CART_SUCCESS,}
}
export const deleteFailureAction = () => {
  return {type: DELETE_CART_FAILURE}
}

// singup function

export const signup = (user, newToastSucess, newToastFail) => (dispatch) => {
  dispatch(signupRequestAction());
  return axios
    .post(`https://paytmmallserver.onrender.com/users`, user)
    .then((res) => {
      dispatch(signupSuccessAction());
      newToastSucess();
    })
    .catch((err) => {
      dispatch(signupFailureAction());
      newToastFail();
    });
};

export const getUsers = (dispatch) => {
  dispatch(userRequestAction());
  axios
    .get(`https://paytmmallserver.onrender.com/users`)
    .then((res) => {
      dispatch(userSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(userFailureAction());
    });
};



export const setLogin = (dispatch) => {
  localStorage.setItem("isAuth", true);
  dispatch(setLoginAction());
};

export const setLogout = (dispatch) => {
  localStorage.setItem("isAuth", false);
  dispatch(setLogoutAction());
};


// export const addToCart = (id,cart) =>(dispatch)=> {
//   dispatch( )
  
// }
