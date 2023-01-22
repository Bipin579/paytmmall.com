import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../Redux/Admin/action';

const ManageOrders = () => {
  // for getting orders of the users, we are doing following steps:-
  // i) Get the every user's orders details from the 'api/users'
  // ii) create an empty array to hold the every user's orders details
  // iii) After storing details in that array, we push that array into reduceer's orders array
  // iv) Then we can get the orders form the order.

  const {orders}=useSelector(state=>state.AdminReducer);
  const dispatch=useDispatch();

  useEffect(()=>{
     dispatch(getOrders)
  },[])

  // console.log(orders)
  return (
    <div>ManageOrders</div>
  )
}

export default ManageOrders