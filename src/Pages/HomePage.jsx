import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { getCarosels, getProducts } from '../Redux/App/action';

const HomePage = () => {
  const dispatch = useDispatch()
  const data = useSelector(store=> store.AppReducer.allcarosels)
  useEffect(() => {
    dispatch(getCarosels)
  }, [])
  console.log(data);
  return (
    <div>HomePage</div>
  )
}

export default HomePage;