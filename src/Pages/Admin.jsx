import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SingleProduct } from '../components/SingleProduct';
import { getProducts } from '../Redux/Admin/action';

const Admin = () => {
  const {isLoading,isError,data}=useSelector(store=>store.adminReducer);
  const dispatch=useDispatch();
  
  useEffect(()=>{
     dispatch(getProducts)
  },[]);

    return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error Occured while getting product list</h2>}
      {data.length>0 && data.map(product=><SingleProduct key={product.id} product={product}/>)}
    </div>
  )
}

export default Admin;
