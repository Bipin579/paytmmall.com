import { useDispatch, useSelector } from 'react-redux';

const ManageProducts = () => {
  // const {isLoading,isError,products}=useSelector(store=>store.AdminReducer);
  const dispatch=useDispatch();
  return(
    <div>
      Manage Products
      {/* {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error Occured while getting product list</h2>}
      {data.length>0 && data.map(product=><SingleProduct key={product.id} product={product}/>)} */}
    </div>
  )
}

export default ManageProducts;
