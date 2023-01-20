import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/App/action';
import { Heading,Grid } from '@chakra-ui/react';
import SingleProduct from './AdminSingleProduct';

const ManageProducts = () => {
  const {isLoading,isError,product}=useSelector(store=>store.AppReducer);
  const dispatch=useDispatch();
  console.log(isLoading,isError,product);

  useEffect(()=>{
    dispatch(getProducts);
  },[])

  return(
    <div>
      <Heading>Manage Products</Heading>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Error Occured while getting product list</h2>}
      <Grid templateColumns={'repeat(4,1fr)'} gap={'2'} className='flexbro' templateRows={'100'}>
      {product.length>0 && product.map(p=><SingleProduct key={p.id} p={p}/>)}
      </Grid>
    </div>
  )
}

export default ManageProducts;
