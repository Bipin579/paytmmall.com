import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, pendingOrder,passOrder, rejectOrder } from '../../Redux/Admin/action';
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Heading,IconButton,useToast,Image} from '@chakra-ui/react'
import { FiClock,FiTruck,FiXOctagon } from 'react-icons/fi';
import {v4} from 'uuid'

const ManageOrders = () => {
  // for getting orders of the users, we are doing following steps:-
  // i) Get the every user's orders details from the 'api/users'
  // ii) create an empty array to hold the every user's orders details
  // iii) After storing details in that array, we push that array into reduceer's orders array
  // iv) Then we can get the orders form the order.

  const {isLoadingOrders,isErrorOrders,orders}=useSelector(state=>state.AdminReducer);
  const dispatch=useDispatch();
  
  useEffect(()=>{
     dispatch(getOrders)
  },[])

  // let obj={ID:1,status:'one',title:'Task1'};
  // obj={...obj,status:'two'};
  // console.log(obj)
  return (
    <div>
      <Heading size='md'>Manage Orders</Heading>
      {isLoadingOrders && <h2>Loading...</h2>}
      {isErrorOrders && <h2>Error Occured while getting Orders</h2>}
        <div>
          {orders.length > 0 && 
          <TableContainer width={'auto'}>
          <Table variant='striped' colorScheme='teal' size={'sm'}>
            <Thead>
              <Tr>
                <Th>Photo</Th>
                <Th>Name</Th>
                <Th>Category</Th>
                <Th>User Name</Th>
                <Th>User Email</Th>
                <Th>Delay</Th>
                <Th>Pass</Th>
                <Th>Reject</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map(order=><Tr key={order.userId+order.id+v4()}>
                <Td><Image src={order.img} alt={order.description} boxSize='90px' borderRadius='full' /></Td>
                <Td>{order.brand}</Td>
                <Td>{order.category}</Td>
                <Td>{order.username}</Td>
                <Td>{order.useremail}</Td>
                <Td><IconButton aria-label='Delay order' onClick={()=>dispatch(pendingOrder(order.userId,order.id))} icon={<FiClock/>}/></Td>
                <Td><IconButton aria-label='Pass order' onClick={()=>dispatch(passOrder(order.userId,order.id))} icon={<FiTruck/>}/></Td>
                <Td><IconButton aria-label='Reject order' onClick={()=>dispatch(rejectOrder(order.userId,order.id))} icon={<FiXOctagon/>}/></Td>
              </Tr>)}
            </Tbody>
          </Table>
        </TableContainer>
          }
        </div>
    </div>
  )
}

export default ManageOrders