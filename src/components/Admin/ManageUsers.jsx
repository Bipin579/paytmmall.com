import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsersList } from '../../Redux/Admin/action';
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Heading,IconButton} from '@chakra-ui/react'
import {FiUserX} from 'react-icons/fi';

const ManageUsers = () => {
   const { isLoadingUserList, isErrorUserList, users } = useSelector(store => store.AdminReducer);
   const dispatch = useDispatch();
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
                <Th isNumeric>Orders</Th>
                <Th>Cart</Th>
                <Th>Total</Th>
                <Th>Profilt</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(user=><Tr key={user.name+user.email}>
                <Td>{user.name}</Td>
                <Td isNumeric>{user.orders=0}</Td>
                <Td>{user.cart=0}</Td>
                <Td isNumeric>{'₹'+300}</Td>
                <Td isNumeric>{'₹'+100}</Td>
                <Td><IconButton aria-label='Delete database' onClick={()=>dispatch(deleteUser(user.email))} icon={<FiUserX/>}/></Td>
              </Tr>)}
            </Tbody>
          </Table>
        </TableContainer>
          }
        </div>
    </div>
  )
}
export default ManageUsers;