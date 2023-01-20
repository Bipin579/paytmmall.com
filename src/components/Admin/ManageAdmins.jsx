import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdmin, getAdminList } from '../../Redux/Admin/action';
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Heading,IconButton,useToast} from '@chakra-ui/react'
import {FiUserX} from 'react-icons/fi';

const ManageAdmins = () => {
  const { isLoadingAdminList, isErrorAdminList, admins } = useSelector(store => store.AdminReducer);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleDelete =(admin) => {
    try {
      dispatch(deleteAdmin(admin.id));
      toast({
        title: 'Admin Deleted',
        description: `${admin.name} has been deleted successfully`,
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while deleting',
        description: `${admin.name} has not deleted`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
   }

   useEffect(() => {
     dispatch(getAdminList)
   }, []);
  return (
    <div>
      <Heading size='md'>Manage Users</Heading>
      {isLoadingAdminList && <h2>Loading...</h2>}
      {isErrorAdminList && <h2>Error Occured while getting Admin list</h2>}
        <div>
          {admins.length > 0 && 
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
              {admins.map(admin=><Tr key={admin.id}>
                <Td>{admin.name}</Td>
                <Td isNumeric>{admin.orders=0}</Td>
                <Td>{admin.cart=0}</Td>
                <Td isNumeric>{'₹'+300}</Td>
                <Td isNumeric>{'₹'+100}</Td>
                <Td><IconButton aria-label='Delete database' onClick={()=>handleDelete(admin)} icon={<FiUserX/>}/></Td>
              </Tr>)}
            </Tbody>
          </Table>
        </TableContainer>
          }
        </div>
    </div>
  )
}
export default ManageAdmins;
