import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsersList } from '../../Redux/Admin/action';
import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableContainer,Heading,IconButton,useToast} from '@chakra-ui/react'
import {FiUserX} from 'react-icons/fi';

const ManageUsers = () => {
   const { isLoadingUserList, isErrorUserList, users } = useSelector(store => store.AdminReducer);
   const orderRef=useRef(0);
   const cartRef=useRef(0);
   const totalRef=useRef(0);
   const profitRef=useRef(0);
   const dispatch = useDispatch();
   const toast = useToast();

   const handleDelete =(user) => {
    try {
      dispatch(deleteUser(user.id));
      toast({
        title: 'User Deleted',
        description: `${user.name} has been deleted successfully`,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while deleting',
        description: `${user.name} has not deleted`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
   }

   useEffect(() => {
     dispatch(getUsersList)
   }, []);

  return (
    <div>
      <Heading size='md'>Manage Users</Heading>
      {isLoadingUserList && <h2>Loading...</h2>}
      {isErrorUserList && <h2>Error Occured while getting User list</h2>}
        <div>
          {users.length > 0 && 
          <TableContainer>
          <Table variant='striped' colorScheme='teal'>
            <Thead>
              <Tr>
                <Th>User</Th>
                <Th>Order</Th>
                <Th>Cart</Th>
                <Th>Total</Th>
                <Th>Profit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user)=>{
                orderRef.current+=user.orders.length;
                cartRef.current+=user.cart.length;
                totalRef.current+=300;
                profitRef.current+=100;
                return <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td >{user.orders=0}</Td>
                <Td>{user.cart=0}</Td>
                <Td >{'₹'+300}</Td>
                <Td >{'₹'+100}</Td>
                <Td><IconButton aria-label='Delete database' onClick={()=>handleDelete(user)} icon={<FiUserX/>}/></Td>
                </Tr>
              })}
            </Tbody>
            <Tfoot bg={'yellow.400'}>
              <Tr>
                <Th>Total : {users.length}</Th>
                <Th >Orders : {+orderRef.current}</Th>
                <Th>Cart : {+cartRef.current}</Th>
                <Th>Total : ₹{totalRef.current}</Th>
                <Th>Profit : ₹{profitRef.current}</Th>
                <Th></Th>
                </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
          }
        </div>
    </div>
  )
}
export default ManageUsers;
