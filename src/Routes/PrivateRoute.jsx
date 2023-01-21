import { useToast } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const isAuth = useSelector(store => store.AuthReducer.isAuth);
    console.log(isAuth);
    const location = useLocation();
    const toast = useToast();
    if (isAuth === false) {
        toast({
            title: "You need to login.",
            status: "warning",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
        return <Navigate to={"/login"} state={{from:location}} replace />
    }
    return children;
}

export default PrivateRoute