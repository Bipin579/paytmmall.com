import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, pendingOrder,passOrder, rejectOrder } from '../../Redux/Admin/action';
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Heading,IconButton,useToast,Image,CircularProgress} from '@chakra-ui/react'
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
  console.log(orders)
  useEffect(()=>{
     dispatch(getOrders)
  },[]);

  // const orders1=[
  //   {brand :"MANSIYAORANGE",category:"jwellery",description:"MeenakariBrassDangleEarring",discountPrice:"299",id:1,img:"https://assetscdn1.paytm.com/images/catalog/product/J/JE/JEWMANSIYAORANGMANS31895221C53E46/1568718205220_0..jpg?imwidth=282&impolicy=hq",originalPrice:"999-70%",status:"pending",userId:1,useremail:"bipin@gmail.com",username:"Bipin"}
  // ]
  // // let updatedOrders2=


  return (
    <div>
      <Heading size='md'>Manage Orders</Heading>
      {isLoadingOrders && <CircularProgress isIndeterminate color='green.300' />}
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
              {orders.map((order)=>{
                let colorProp='',one='',two='',three='';
                order.status==='Delayed'?one='blue':order.status==='Passed'?two='green':order.status==='Rejected'?three='red':colorProp="";
                return(
                <Tr key={order.userId+order.id+v4()}>
                <Td><Image src={order.img} alt={order.description} boxSize='90px' borderRadius='full' /></Td>
                <Td>{order.brand}</Td>
                <Td>{order.category}</Td>
                <Td>{order.username}</Td>
                <Td>{order.useremail}</Td>
                <Td><IconButton aria-label='Delay order' onClick={()=>dispatch(pendingOrder(order.userId,order.id))} color={one} icon={<FiClock/>}/></Td>
                <Td><IconButton aria-label='Pass order' onClick={()=>dispatch(passOrder(order.userId,order.id))} color={two} icon={<FiTruck/>}/></Td>
                <Td><IconButton aria-label='Reject order' onClick={()=>dispatch(rejectOrder(order.userId,order.id))} color={three} icon={<FiXOctagon/>}/></Td>
              </Tr>
                )})
              }
            </Tbody>
          </Table>
        </TableContainer>
          }
        </div>
    </div>
  )
}

export default ManageOrders