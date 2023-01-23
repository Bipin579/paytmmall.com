import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../Redux/App/action';
import { Heading,Grid ,CircularProgress} from '@chakra-ui/react';
import SingleProduct from './AdminSingleProduct';

const ManageProducts = () => {
  const {isLoading,isError,products}=useSelector(store=>store.AdminReducer);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts);
  },[])

  return(
    <div>
      <Heading size={'md'}>Manage Products</Heading>
      {isLoading && <CircularProgress isIndeterminate color='green.300' />}
      {isError && <h2>Error Occured while getting product list</h2>}
      <Grid templateColumns={'repeat(4,1fr)'} gap={2} className='flexbro' templateRows={'100'}>
      {products.length>0 && products.map(product=><SingleProduct key={product.id} product={product}/>)}
      </Grid>
    </div>
  )
}

export default ManageProducts;
