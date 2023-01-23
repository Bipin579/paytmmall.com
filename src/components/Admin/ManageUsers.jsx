import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getCarts, getOrders, getUsersList } from '../../Redux/Admin/action';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Heading, IconButton, useToast,CircularProgress } from '@chakra-ui/react'
import { FiUserX } from 'react-icons/fi';

const ManageUsers = () => {
  const { isLoadingUserList, isErrorUserList, users,orders,carts} = useSelector(store => store.AdminReducer);
  let {total,totalProfit} = useSelector(store => store.AdminReducer);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete = (user) => {
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
    dispatch(getOrders)
    dispatch(getCarts)
  }, []);
  // why my this componet is rednering 2 extra times?
  // console.log('manage uses list page rendering')

  return (
    <div>
      <Heading size='md'>Manage Users</Heading>
      {isLoadingUserList && <CircularProgress isIndeterminate color='green.300' />}
      {isErrorUserList && <h2>Error Occured while getting User list</h2>}
      <div> {users.length > 0 &&
        <TableContainer>
          <Table variant='striped' colorScheme='teal' size={'lg'}>
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
              {users.map((user) => {
                let Singletotal=0;
                user.orders.forEach((order=>Singletotal+=(+order.discountPrice)));
                total += Singletotal;
                totalProfit += 100;
                return <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td >{user.orders.length}</Td>
                  <Td>{user.cart.length}</Td>
                  <Td >{'₹' + Singletotal}</Td>
                  <Td >{'₹' + 100}</Td>
                  <Td><IconButton aria-label='Delete database' onClick={() => handleDelete(user)} icon={<FiUserX />} /></Td>
                </Tr>
              })}
            </Tbody>
            <Tfoot bg={'yellow.400'}>
              <Tr>
                <Th>Total : {users.length}</Th>
                <Th >Orders : {orders.length}</Th>
                <Th>Cart : {carts.length}</Th>
                <Th>Total : ₹{total}</Th>
                <Th>Profit : ₹{totalProfit}</Th>
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
