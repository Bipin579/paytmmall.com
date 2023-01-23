import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdmin, getAdminList } from '../../Redux/Admin/action';
import {Table,Thead,Tbody,Tr,Th,Td,TableContainer,Heading,IconButton,useToast,Image,CircularProgress} from '@chakra-ui/react'
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
        duration: 4000,
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
      <Heading size='md'>Manage Admins</Heading>
      {isLoadingAdminList && <CircularProgress isIndeterminate color='green.300' />}
      {isErrorAdminList && <h2>Error Occured while getting Admin list</h2>}
        <div>
          {admins.length > 0 && 
          <TableContainer>
          <Table variant='striped' colorScheme='teal' size={'lg'}>
            <Thead>
              <Tr>
                <Th>Photo</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Contact No.</Th>
                <Th>Role</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {admins.map(admin=><Tr key={admin.id}>
                <Td><Image src={admin.image} alt={admin.name} boxSize='90px' borderRadius='full' /></Td>
                <Td>{admin.name}</Td>
                <Td>{admin.email}</Td>
                <Td>{admin.contact}</Td>
                <Td>{admin.role}</Td>
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
